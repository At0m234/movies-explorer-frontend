export const BASE_URL = 'https://api.movies.students.nomoredomains.icu';
// export const BASE_URL = 'http://localhost:3001';
export const token = localStorage.getItem('token');

// signup — регистрация пользователя
export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  })
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject({message: `Не удалось зарегистрироваться: ${res.status}`})
  })
  .then((data) => {
    return data
  })
  .catch((err) => {
    console.log(err)
  })
}

// signin — авторизация пользователя
export const authorize = (email, password ) => {
  return fetch (`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( { email, password })
  })
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    localStorage.setItem('token', data.token);
    return data;
  })
  .catch((err) => {
    console.log(err)
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

  // // PATCH /users/me Метод загрузки новых данных о пользователе на сервер
  export const editUserInfo = (formData) => {
    return fetch (`${BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        "authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
  }

// POST /movies - сохранение пользователем фильма
export const addMovieLike = (movie) => {
  return fetch (`${BASE_URL}/movies`, {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
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
    }),
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
export const removeMovieLike = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    mode: 'cors',
    method: 'DELETE',
    headers: {
      "authorization": `Bearer ${token}`,
    },
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