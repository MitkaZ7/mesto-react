import React from 'react';
function PopupEditAvatar() {
    return (
        <div className="popup popup_type_edit-avatar">
            <div className="popup__container">
                <button className="popup__button-close button" type="button"></button>
                <form action="#" name="edit-avatar" className="popup__form popup__form_type_edit-avatar">
                    <h3 className="popup__title">Обновить аватар</h3>
                    <fieldset className="popup__fieldset">
                        <input className="popup__form-input popup__form-input_type_avatar-url" id="input-avatar-url" type="url"
                            name="avatarLink" required placeholder="Ссылка на аватар" />
                        <span className="popup__input-error input-avatar-url-error"></span>
                    </fieldset>
                    <button type="submit" className="popup__button-submit button button_type_save">Сохранить</button>
                </form>
            </div>
        </div>
    )
}
export default PopupEditAvatar;