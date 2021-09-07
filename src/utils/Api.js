class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  }
  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      method: 'GET',
      headers: {
        authorization: this._token
      }
    })
    .then(this._checkResponse)
  }
  getInitialCards() {
    return fetch(`${this._url}cards`, {
      method: 'GET',
      headers: {
        authorization: this._token
      }
    })
    .then(this._checkResponse)
  }
  editUserInfo(data) {
    return fetch(`${this._url}users/me`, {
      method:'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then(this._checkResponse)
  }
  editUserAvatar(data) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then(this._checkResponse)
  }
  addNewCard(data) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.placeName,
        link: data.imageUrl
      })
    })
    .then(this._checkResponse)
  }
  likeCard(cardId, isLiked) {
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: `${!isLiked ? 'PUT' : 'DELETE'}`,
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
  }
  removeCard(cardId) {
    return fetch(`${this._url}cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkResponse)
  }
}
const api = new Api('https://nomoreparties.co/v1/cohort-26/', '2ceacd5c-fca2-4318-a334-9732db7cb6fc');
export default api;
