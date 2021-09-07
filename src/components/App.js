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
  function handleUpdateAvatar(avatar) {
    api
      .editUserAvatar(avatar)
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
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((error) => {
        console.log('Ошибка, данные пользователя не загрузились');
      })
  }, []);

  function handleAddPlaceSumbmit(card) {
    api
      .addNewCard(card)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch((error) => {
        console.log('Ошибка, не удалось добавить новую карточку');
      })
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(myLike => myLike._id === currentUser._id);
    api
      .likeCard(card._id, isLiked).then((newCard) => {
      setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
    })
      .catch((error) => {
        console.log('Ошибка установки лайка');
      });
  }

  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((card) => card._id !== card._id));
      })
      .catch((error) => {
        console.log('Ошибка удаления карточки');
      })
  }
  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
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
          onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelet={handleCardDelete} cards={cards}/>
        <Footer />
      </div>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={handlePopupClose} onUpdateUser={handleUpdateProfile}></EditProfilePopup>
      <AddPlacePopup isOpen={isAddCardPopupOpen} onClose={handlePopupClose} onAddPlace={handleAddPlaceSumbmit}></AddPlacePopup>
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={handlePopupClose} onUpdateAvatar={handleUpdateAvatar}></EditAvatarPopup>
      <PopupWithForm name="remove-card" title="Вы уверены?" onClose={closeAllPopups} buttonTitle="Да" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
}

export default App;
