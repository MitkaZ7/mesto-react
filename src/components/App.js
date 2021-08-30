import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
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

  return (
    <>
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddCard={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} />
        <Footer />
      </div>
      <PopupWithForm name="profile-edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonTitle="Сохранить">
        <input id="input-name" type="text" className="popup__form-input popup__form-input_type_name" defaultValue="" name="name" placeholder="Имя" minLength="2" maxLength="40" required/>
        <span className="popup__input-error input-name-error"></span>
        <input id="input-job" type="text" className="popup__form-input popup__form-input_type_job" defaultValue="" name="about" placeholder="Чем вы занимаетесь?" minLength="2" maxLength="200" required/>
        <span className="popup__input-error input-job-error"></span>
      </PopupWithForm>
      <PopupWithForm name="add-place" title="Новое место" isOpen={isAddCardPopupOpen} onClose={closeAllPopups} buttonTitle="Создать">
        <input id="input-place-name" type="text" className="popup__form-input popup__form-input_type_place-name" placeholder="Название" name="placeName" minLength="2" maxLength="30" required/>
        <span className="popup__input-error input-place-name-error"></span>
        <input id="input-image-url" type="url" className="popup__form-input popup__input_place-link" placeholder="Ссылка на картинку" name="imageUrl" required />
        <span className="popup__input-error input-image-url-error"></span>
      </PopupWithForm>
      <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonTitle="Сохранить">
        <input id="avatar-input" type="url" className="popup__form-input popup__form-input_type_avatar-url" placeholder="Ссылка на аватар" name="avatar" required />
        <span className="popup__input-error input-avatar-url-error"></span>
      </PopupWithForm>
      <PopupWithForm name="remove-card" title="Вы уверены?" onClose={closeAllPopups} buttonTitle="Да" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
