// export const BASE_URL = 'https://api.movies.students.nomoredomains.icu/';
export const BASE_URL = 'http://localhost:3001';
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
    if(data.token) {
      localStorage.setItem('token', data.token);
      return data;
    } else {
      return data;
    }
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

