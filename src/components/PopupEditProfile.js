import React from 'react';
function PopupEditProfile() {
    return (
        <div className="popup popup_type_edit">
        <div className="popup__container">
          <button className="popup__button-close button" type="button"></button>
          <form action="#" name="profile-edit" className="popup__form popup__form_type_edit-profile">
            <h3 className="popup__title">Редактировать профиль</h3>
              <fieldset className="popup__fieldset">
                <input className="popup__form-input popup__form-input_type_name" id="input-name" type="text" name="name" placeholder="Введите ваше имя" required minlength="2" maxlength="40" />
                <span className="popup__input-error input-name-error"></span>
                <input className="popup__form-input popup__form-input_type_job" id="input-job" type="text" name="about" placeholder="Чем вы занимаетесь?" required minlength="2" maxlength="200" />
                <span className="popup__input-error input-job-error"></span>
              </fieldset>
            <button type="submit" className="popup__button-submit button button_type_save">Сохранить</button>
          </form>
        </div>
      </div>
    )
}
export default PopupEditProfile;