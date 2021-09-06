import React, { useEffect, useState } from 'react';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';



function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }
  const handleAddPlaceClick = () => {
    setIsAddCardPopupOpen(true);
  }
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddCardPopupOpen(false);
    setSelectedCard({});
  }
  function handlePopupClose(evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  }
  function handleUpdateAvatar(userPofile) {
    api
      .editUserAvatar(userPofile)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch((error) => {
        console.log('Ошибка, аватар не поменялся');
    })
  }
  function handleUpdateProfile(userProfile) {
    api
      .editUserInfo(userProfile)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((error) => {
        console.log('Ошибка, данные пользователя не поменялись');
      })
  }
  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res)
      })
      .catch((error) => {
        console.log('Ошибка, карточки н загрузились');
      })
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddCard={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} cards={cards}/>
        <Footer />
      </div>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={handlePopupClose} onUpdateProfile={handleUpdateProfile}></EditProfilePopup>
      <PopupWithForm name="add-place" title="Новое место" isOpen={isAddCardPopupOpen} onClose={closeAllPopups} buttonTitle="Создать">
        <input id="input-place-name" type="text" className="popup__form-input popup__form-input_type_place-name" placeholder="Название" name="placeName" minLength="2" maxLength="30" required/>
        <span className="popup__input-error input-place-name-error"></span>
        <input id="input-image-url" type="url" className="popup__form-input popup__input_place-link" placeholder="Ссылка на картинку" name="imageUrl" required />
        <span className="popup__input-error input-image-url-error"></span>
      </PopupWithForm>
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={handlePopupClose} onUpdateAvatar={handleUpdateAvatar}></EditAvatarPopup>
      <PopupWithForm name="remove-card" title="Вы уверены?" onClose={closeAllPopups} buttonTitle="Да" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
}

export default App;
