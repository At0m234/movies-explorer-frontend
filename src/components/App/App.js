import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import './App.css';


import * as mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Register from '../Register/Register';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

function App() {
  const history = useHistory();

  const [currentUser, setCurrentUser] = useState({});
  const [isLogged, setLogged] = useState(false);


  function onRegister({name, email, password}) {
    mainApi.register(name, email, password)
    history.push('/signin')
  }

  function onLogin({email, password}) {
    mainApi.authorize(email, password)
      if (!email || !password) {
        return
      } else {
        mainApi.authorize(email, password)
          .then((data) => {
            localStorage.setItem('email', data.email)
            setLogged(true)
            history.push('/movies')
          })
          .catch((err) => {
            console.log(err)
          })
      }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>

          <Route exact path='/'>
            <Header/>
            <Main/>
            <Footer/>
          </Route>

          <Route path='/signup'>
            <Header/>
            <Register
              onRegister={onRegister}
            />
          </Route>

          <Route path='/signin'>
            <Header/>
            <Login
              onLogin={onLogin}
            />
          </Route>

          <Route path='/movies'>
            <Header/>
            <Movies/>
            <Footer/>
          </Route>

          <Route path='/saved-movies'>
            <Header/>
            <SavedMovies/>
            <Footer/>
          </Route>

          <Route path='/profile'>
            <Header/>
            <Profile/>
          </Route>

          <Route path='/*'>
            <NotFound/>
          </Route>

        </Switch>

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
