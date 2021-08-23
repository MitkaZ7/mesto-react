import React from 'react';
function PopupAddCard() {
    return (
        <div className="popup popup_type_add">
            <div className="popup__container">
                <button className="popup__button-close button" type="button"></button>
                <form action="#" name="add-place" className="popup__form popup__form_type_add">
                    <h3 className="popup__title">Новое место</h3>
                    <fieldset className="popup__fieldset">
                        <input className="popup__form-input popup__form-input_type_place-name" id="input-place-name" type="text" name="placeName" required placeholder="Название" />
                        <span className="popup__input-error input-place-name-error"></span>
                        <input className="popup__form-input popup__form-input_type_image-url" id="input-image-url" type="url" name="imageUrl" required placeholder="Ссылка на картинку" />
                        <span className="popup__input-error input-image-url-error"></span>
                    </fieldset>
                    <button type="submit" className="popup__button-submit button button_type_save">Создать</button>
                </form>
            </div>
        </div>
    )
}

export default PopupAddCard;