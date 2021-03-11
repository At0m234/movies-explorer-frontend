import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Dimensions } from 'react-native';
import './App.css';


import * as mainApi from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

function App() {
  const [isOnSaved, setIsOnSaved] = useState(false);
  const [currentUser, setCurrentUser] = useState({email: '', name: ''});
  const [isLogged, setIsLogged] = useState(localStorage.getItem('token') ? true : false);
  const [firstSearch, setFirstSearch] = useState(false);

  // ---------- КАРТОЧКИ ФИЛЬМОВ ----------
  const [cards, setCards] = useState([]);
  const [liked, setLiked] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [visibleSavedMovies, setVisibleSavedMovies] = useState([]);

  const [errorFound, setErrorFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(16);

  // ---------- ВАЛИДАЦИЯ ----------

  // Валидация форм регистрации, логина и редактирования профиля
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');

  const [nameInvalid, setNameInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid,setPasswordInvalid] = useState(false);

  const [nameError, setNameError] = useState(`Поле "Имя" не может быть пустым`);
  const [emailError, setEmailError] = useState(`Поле "E-mail" не может быть пустым`);
  const [passwordError,setPasswordError] = useState(`Поле "Пароль" не может быть пустым`);

  const [formValid, setFormValid] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editFormValid, setEditFormValid] = useState(true);

  // Валидация формы поиска фильмов
  const [filmInputSearch, setFilmInputSearch] = useState('');
  const [filmInputSearchInvalid, setFilmInputSearchInvalid] = useState(false);
  const [filmInputSearchError, setFilmInputSearchError] = useState('Нужно ввести ключевое слово');
  const [filterCheckBoxOn, setFilterCheckBoxOn] = useState(false);

  const history = useHistory();

  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

  window.addEventListener("resize", () => {
    setWindowWidth(Dimensions.get('window').width
  )}, false);

  useEffect(() => {
    if(windowWidth > 1281) {
      setCardsVisible(16)
    }
    if(windowWidth > 769 && windowWidth < 1280 ) {
      setCardsVisible(12)
    }
    if(windowWidth > 481 && windowWidth < 768) {
      setCardsVisible(8)
    }
    if(windowWidth > 50 && windowWidth < 480) {
      setCardsVisible(5)
    }
    if (localStorage.getItem("savedMovies")) setSavedMovies(JSON.parse(localStorage.getItem("savedMovies")))
  },[windowWidth])

  function tokenCheck() {
    if (localStorage.getItem('token')) {
      // авторизуем пользователя
      setIsLogged(true);
      // CurrentUser
      setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
    }
  }

  useEffect(() => {
    setVisibleSavedMovies(findFilms((localStorage.getItem('savedMovies') ? JSON.parse(localStorage.getItem('savedMovies')) : []), filmInputSearch))
    // если у пользователя есть токен в localStorage,
    // функция проверит валидность токена
    // и обновит данные пользователя
    tokenCheck();
    }, []);

  const getSavedFilms = () => {
    setVisibleSavedMovies(findFilms((localStorage.getItem('savedMovies') ? JSON.parse(localStorage.getItem('savedMovies')) : []), filmInputSearch))
    setIsLoading(false);
  }
  const findFilms = (films, name) => {
    if (name === "") {
      return films
    } else {
      return films.filter((elem)=> {
        if (filterCheckBoxOn) {
          if (elem.nameRU.trim().toLowerCase().includes(name.trim().toLowerCase()) && elem.duration <= 40) {
            return true
          } else {
            return false
          }
        } else {
          if (elem.nameRU.trim().toLowerCase().includes(name.trim().toLowerCase())) {
            return true
          } else {
            return false
          }
        }
      })
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email': setEmailInvalid(true);
        break
      case 'password': setPasswordInvalid(true);
        break
      case 'name': setNameInvalid(true);
        break
      case 'filmInput': setFilmInputSearchInvalid(true);
        break
      default:
        break
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegExp.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный E-mail')
    } else {
      setEmailError('')
    }
  }

  const passwordHandler = (e) => {
    // const passwordRegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    setPassword(e.target.value);

    if (e.target.value.length < 8) {
      setPasswordError('Пароль должен содержать не менее 8 символов')
      if(!e.target.value) {
        setPasswordError('Пароль не может быть пустым')
      }
    } else {
      setPasswordError('')
    }
  }

  const nameHandler = (e) => {
    setName(e.target.value)
    if(e.target.value.length < 2 || e.target.value.length > 30) {
      setNameError(`Поле "Имя" должно содержать от 2 до 30 символов`)
      if(!e.target.value) {
        setNameError(`Поле "Имя" не может быть пустым`)
      } else {
        setNameError('')
      }
    }
  }

  function onRegister({name, email, password}) {
    mainApi.register(name, email, password);
    setCurrentUser({email: email, name: name});
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    history.push('/signin');
  }

  // функция обработки кнопки сабмита формы регистрации
  function handlerRegisterSubmit(e) {
    e.preventDefault();
    onRegister({name, email, password});
  }

  function onLogin({email, password}) {
    mainApi.authorize(email, password)
      if (!email || !password) {
        return
      }
      mainApi.authorize(email, password)
        .then((data) => {
          setIsLogged(true)
          history.push('/movies')
        })
        .catch((err) => {
          console.log(err)
        })
  }

  // функция обработки кнопки сабмита формы логина
  function handlerLoginSubmit(e) {
    e.preventDefault();
    onLogin({email, password});
  }

  function handleEditProfileBtn (e) {
    e.preventDefault();

    if (isEditing) {
      if (editFormValid) {
        mainApi.editUserInfo({
          name: name,
          email: email,
        })
        .then((data) => {
          setIsEditing(false);
          setCurrentUser({email: data.user.email, name: data.user.name});
          localStorage.setItem("currentUser", JSON.stringify({email: data.user.email, name: data.user.name}));
        })
        .catch((err) => {
          console.log(err);
        })
      }
    } else {
      setIsEditing(true);
    }
  }

  function onSignOut() {
    localStorage.removeItem('token')
    setIsLogged(false)
    history.push('/')
  }

  function getRequestedMovies(filmReq) {

    if (filmReq) {

      setIsLoading(true);
      moviesApi.getInitialMovies(filmInputSearch)
        .then((data) => {
          const foundMovies = data.filter((card) => {
            if (filterCheckBoxOn) {
              if (card.duration <= 40) {
                if (card.nameRU) {
                  if(card.nameRU.trim().toLowerCase().includes(filmInputSearch.trim().toLowerCase())) {
                    return card
                  }
                }
                if (card.nameEN) {
                  if (card.nameEN.trim().toLowerCase().includes(filmInputSearch.trim().toLowerCase())) {
                    return card
                  }
                }
              }
            } else {
              if (card.nameRU) {
                if(card.nameRU.trim().toLowerCase().includes(filmInputSearch.trim().toLowerCase())) {
                  return card
                }
              }
              if (card.nameEN) {
                if (card.nameEN.trim().toLowerCase().includes(filmInputSearch.trim().toLowerCase())) {
                  return card
                }
              }
            }
            return null
          })
          localStorage.setItem('foundMovies', JSON.stringify(foundMovies))
          setCards(foundMovies)
          setIsLoading(false);
          if(windowWidth > 1279) {
            setCardsVisible(16)
          }
          if(windowWidth > 767 && windowWidth < 1279 ) {
            setCardsVisible(12)
          }
          if(windowWidth > 480 && windowWidth < 767) {
            setCardsVisible(8)
          }
          if(windowWidth > 320 && windowWidth < 480) {
            setCardsVisible(5)
          }
          return foundMovies
        })
        .catch((err) => {
          setErrorFound(true);
          setIsLoading(false);
          console.log(err)
        })
    }
  }

  // Обработчик инпута поисковика фильмов
  function hadnlefilmInputSearchChange(e) {
    setFilmInputSearch(e.target.value)
  }

  // Обработчик сабмита в поисковике фильмов
  function onSearchMoviesFormSubmit(e) {
    e.preventDefault();

    if (!filmInputSearch) {
      setFilmInputSearchInvalid(true);
      setFilmInputSearchError('Нужно ввести ключевое слово');
    }
    if (filmInputSearch) {
      const filmInputSearchRegExp = /[A-Za-zА-Яа-яЁё0-9 -]{1,40}/;

      if(!filmInputSearchRegExp.test(filmInputSearch.toLowerCase())) {
        setFilmInputSearchInvalid(true);
        setFilmInputSearchError('Введены недопустимые символы');
        return
      } else {
        setFilmInputSearchError('');
        setFilmInputSearchInvalid(false);
        setFirstSearch(true);
        if (!isOnSaved)
        {
          getRequestedMovies(filmInputSearch);
        }else{
          getSavedFilms()
        }
        return
      }
    }
  }

  // Обработчик лайка фильма - сохранение фильма
  function likeMovie(movie, func) {
    mainApi.addMovieLike(movie)
      .then((movies) => {
        if (movies) {
          let savedMoviesT = savedMovies
          movies.id = movies.movieId
          savedMoviesT.push(movies)
          func();
          setSavedMovies(savedMoviesT);
          localStorage.setItem('savedMovies', JSON.stringify(savedMoviesT));
        }
      })
  }

  // Обработчик дизлайка фильма - удаление фильма
  function dislikeMovie(movie, func) {
    mainApi.removeMovieLike(movie.id)
      .then((movies) => {
        if (movies) {
          let savedMoviesList = savedMovies
          savedMoviesList = savedMoviesList.filter((elem)=>{
            if (elem.id === movie.id) {
              return false;
            }
            return true
          })
          func();
          setSavedMovies(savedMoviesList);
          localStorage.removeItem('savedMovies');
        }
      })
  }

  function checkMovies(movies, savedMovies) {
    return movies.filter((el) => {
      for (let i = 0; i < savedMovies.length; i++) {
        if (unification(el) && unification(savedMovies[i]))
          if (el.id === savedMovies[i].id){
            return false
          }
      }
      return true
    })
  }

  function unification(cards) {
    try {
      if (cards.id) {
        return true
      }
      return false
    }
    catch {
      return false
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>

          <Route exact path='/'>
            <Header
              windowWidth={windowWidth}
            />
            <Main/>
            <Footer/>
          </Route>

          <Route path='/signup'>
            <Header
              windowWidth={windowWidth}
            />
            <Register
              name={name}
              nameInvalid={nameInvalid}
              nameError={nameError}
              nameHandler={nameHandler}

              email={email}
              emailInvalid={emailInvalid}
              emailError={emailError}
              emailHandler={emailHandler}

              password={password}
              passwordInvalid={passwordInvalid}
              passwordError={passwordError}
              passwordHandler={passwordHandler}

              formValid={formValid}
              setFormValid={setFormValid}
              blurHandler={blurHandler}

              onRegister={onRegister}
              handlerRegisterSubmit={handlerRegisterSubmit}
            />
          </Route>

          <Route path='/signin'>
            <Header
              windowWidth={windowWidth}
            />
            <Login
              email={email}
              emailInvalid={emailInvalid}
              emailError={emailError}
              emailHandler={emailHandler}

              password={password}
              passwordInvalid={passwordInvalid}
              passwordError={passwordError}
              passwordHandler={passwordHandler}

              formValid={formValid}
              setFormValid={setFormValid}
              blurHandler={blurHandler}

              onLogin={onLogin}
              handlerLoginSubmit={handlerLoginSubmit}
            />
          </Route>

          <ProtectedRoute path='/movies' Agreed={isLogged}
            components={[
              Header,
              Movies,
              Footer
            ]}
            properties={[
              {"windowWidth":windowWidth},
              {
                "setIsOnSaved":setIsOnSaved,
                "cards":checkMovies(cards, savedMovies),
                "errorFound":errorFound,
                "isLoading":isLoading,
                "cardsVisible":cardsVisible,
                "setCardsVisible":setCardsVisible,
                "savedMovies":savedMovies,
                "setSavedMovies":setSavedMovies,
                "liked":liked,
                "setLiked":setLiked,
                "likeMovie":likeMovie,
                "dislikeMovie":dislikeMovie,
                "firstSearch":firstSearch,
                "windowWidth":windowWidth,
                // SearchForm
                "filterCheckBoxOn": filterCheckBoxOn,
                "setFilterCheckBoxOn":setFilterCheckBoxOn,
                "hadnlefilmInputSearchChange":hadnlefilmInputSearchChange,
                "onSearchMoviesFormSubmit":onSearchMoviesFormSubmit,
                "filmInputSearchInvalid":filmInputSearchInvalid,
                "setFilmInputSearchInvalid":setFilmInputSearchInvalid,
                "filmInputSearchError":filmInputSearchError,
                "setFilmInputSearchError":setFilmInputSearchError,
                "blurHandler": blurHandler,
              },
              {}
            ]}
          />

          <ProtectedRoute path='/saved-movies' Agreed={isLogged}
            components={[
              Header,
              SavedMovies,
              Footer
            ]}
            properties={[
              {"windowWidth":windowWidth},
              {
                "setIsOnSaved":setIsOnSaved,
                "savedMovies":visibleSavedMovies,
                "setSavedMovies":setSavedMovies,
                "likeMovie":likeMovie,
                "dislikeMovie":dislikeMovie,
                // SearchForm
                "filterCheckBoxOn":filterCheckBoxOn,
                "setFilterCheckBoxOn":setFilterCheckBoxOn,
                "hadnlefilmInputSearchChange":hadnlefilmInputSearchChange,
                "onSearchMoviesFormSubmit":onSearchMoviesFormSubmit,
                "filmInputSearchInvalid":filmInputSearchInvalid,
                "setFilmInputSearchInvalid":setFilmInputSearchInvalid,
                "filmInputSearchError":filmInputSearchError,
                "setFilmInputSearchError":setFilmInputSearchError,
                "blurHandler": blurHandler,
              },
              {}
            ]}
          />

          <ProtectedRoute path='/profile' Agreed={isLogged}
            components={[
              Header,
              Profile
            ]}
            properties={[
              {"windowWidth" : windowWidth},
              {
                "currentUser": currentUser,
                "name": name,
                "nameInvalid": nameInvalid,
                "nameError": nameError,
                "nameHandler": nameHandler,

                "email": email,
                "emailInvalid": emailInvalid,
                "emailError": emailError,
                "emailHandler": emailHandler,

                "isEditing": isEditing,
                "editFormValid": editFormValid,
                "setEditFormValid": setEditFormValid,

                "blurHandler": blurHandler,
                "handleEditProfileBtn": handleEditProfileBtn,
                "onSignOut":onSignOut,
              }
            ]}
          />

          <ProtectedRoute path='/*' Agreed={isLogged}
            components={[NotFound]}
            properties={[{}]}
          />

        </Switch>

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
