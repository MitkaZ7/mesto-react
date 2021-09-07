import React, { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';


export default function AddPlacePopup(props) {
  const [placeName, setPlaceName] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');

  useEffect(() => {
    setPlaceName('');
    setImageUrl('');

  }, [props.isOpen])

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddPlace({
      placeName: placeName,
      imageUrl: imageUrl
    })
  }
  function handleChangePlaceName(evt) {
    setPlaceName(evt.target.value);
  }
  function handleChangeImageUrl(evt) {
    setImageUrl(evt.target.value);
  }

  return (
    <PopupWithForm name="add-place" title="Новое место" isOpen={props.isOpen} onClose={props.onClose} buttonTitle="Создать" onSubmit={handleSubmit} >
      <input id="input-place-name" type="text" className="popup__form-input popup__form-input_type_place-name" placeholder="Название" name="placeName" minLength="2" maxLength="30" required onChange={handleChangePlaceName}/>
      <span className="popup__input-error input-place-name-error"></span>
      <input id="input-image-url" type="url" className="popup__form-input popup__input_place-link" placeholder="Ссылка на картинку" name="imageUrl" required onChange={handleChangeImageUrl}/>
      <span className="popup__input-error input-image-url-error"></span>
    </PopupWithForm>
  )
}
