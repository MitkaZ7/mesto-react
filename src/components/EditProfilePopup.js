import React, { useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';


export default function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setUserName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.userAbout);

  React.useEffect(() => {
    setUserName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(evt) {
    setUserName(evt.target.value)
  }
  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }


  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateProfile({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm name="profile-edit" title="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose} buttonTitle="Сохранить" onSumbmit={handleSubmit}>
      <input onChange={handleChangeName} id="input-name" type="text" className="popup__form-input popup__form-input_type_name" name="name" placeholder="Имя" minLength="2" maxLength="40" required value={props.userName}/>
      <span className="popup__input-error input-name-error"></span>
      <input onChange={handleDescriptionChange} id="input-job" type="text" className="popup__form-input popup__form-input_type_job" name="about" placeholder="Чем вы занимаетесь?" minLength="2" maxLength="200" required  value={props.userAbout}/>
      <span className="popup__input-error input-job-error"></span>
    </PopupWithForm>
  )
}
