export const BASE_URL = 'https://api.movexp.students.nomoredomains.icu';
// export const BASE_URL = 'http://localhost:3001';

// signup — регистрация пользователя
export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name, email, password})
  })
  .then((res) => {
    console.log(res)
    return res.json();
  })
}

// signin — авторизация пользователя
export const authorize = (email, password) => {
  return fetch (`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( { email, password }),
  })
  .then((res) => {
    console.log(res)
    return res.json()
  })
}

// users/me - получение данных о пользователе
export const getContent = (token) => {
  if (token) {
    return fetch (`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      }
    })
    .then((res)=> {
      return res.json()
    })
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log(err)
    })
  } else {
    console.log("Token не найден")
  }
}

// Метод загрузки новых данных о пользователе на сервер
//PATCH /users/me
export const editUserInfo = ({ name, email }, token) => {
  return fetch (`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ name, email }),
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    return data;
  })
}

// POST /movies - сохранение пользователем фильма
export const addMovieLike = (movie, token) => {
  return fetch (`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({
      'country': movie.country,
      'director': movie.director,
      'duration': movie.duration,
      'year': movie.year,
      'description': movie.description,
      'image': movie.image,
      'trailerLink': movie.trailerLink,
      'nameRU': movie.nameRU,
      'nameEN': movie.nameEN,
      'movieId': movie.id,
    })
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  })
  .catch((err) => {
    console.log(err);
  })
}

// DELETE /movies - удаление пользователем фильма
export const removeMovieLike = (movieId, token) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
      "authorization": `Bearer ${token}`,
    }
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    })
}