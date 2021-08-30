import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupImagePreview from './PopupImagePreview';

function App() {
  const [isPopupEditProfileOpen, setOpenPopupEdtiProfileOpen] = React.useState(false);
  const [isPopupEditAvatarOpen, setOpenPopupEditAvatarOpen] = React.useState(false);
  const [isPopupAddCardOpen, setOpenPopupAddCard] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const handleEditProfileClick = () => {
    setOpenPopupEdtiProfileOpen(true);
  }
  const handleEditAvatarClick = () => {
    setOpenPopupEditAvatarOpen(true);
  }
  const handleAddPlaceClick = () => {
    setOpenPopupAddCard(true);
  }
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setOpenPopupEdtiProfileOpen(false);
    setOpenPopupEditAvatarOpen(false);
    setOpenPopupAddCard(false);
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
      <PopupWithForm name="profile-edit" title="Редактировать профиль" isOpen={isPopupEditProfileOpen} onClose={closeAllPopups}
        buttonTitle="Сохранить" children={
            <fieldset className="popup__fieldset">
              <input id="input-name" type="text" className="popup__form-input popup__form-input_type_name" defaultValue="" name="name"
                placeholder="Имя" minLength="2" maxLength="40" required/>
              <span className="popup__input-error input-name-error"></span>
              <input id="input-job" type="text" className="popup__form-input popup__form-input_type_job" defaultValue="" name="about"
                placeholder="Чем вы занимаетесь?" minLength="2" maxLength="200" required/>
              <span className="popup__input-error input-job-error"></span>
            </fieldset>
        } />

      <PopupWithForm name="add-place" title="Новое место" isOpen={isPopupAddCardOpen} onClose={closeAllPopups}
        buttonTitle="Создать" children={
            <fieldset className="popup__fieldset">
              <input id="input-place-name" type="text" className="popup__form-input popup__form-input_type_place-name" placeholder="Название"
              name="placeName" minLength="2" maxLength="30" required/>
              <span className="popup__input-error input-place-name-error"></span>
              <input id="input-image-url" type="url" className="popup__form-input popup__input_place-link" placeholder="Ссылка на картинку"
                name="imageUrl" required />
              <span className="popup__input-error input-image-url-error"></span>
            </fieldset>
        } />
      <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isPopupEditAvatarOpen} onClose={closeAllPopups}
        buttonTitle="Сохранить" children={
          <fieldset className="popup__fieldset">
            <input id="avatar-input" type="url" className="popup__form-input popup__form-input_type_avatar-url" placeholder="Ссылка на аватар"
              name="avatar" required />
            <span className="popup__input-error input-avatar-url-error"></span>
          </fieldset>
        } />
      <PopupWithForm name="remove-card" title="Вы уверены?" onClose={closeAllPopups} buttonTitle="Да" />
      <PopupImagePreview card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
