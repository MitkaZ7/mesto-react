import React from 'react';
function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_status_opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__button-close button" type="button" onClick={props.onClose}></button>
        <form action="#" name="popup-form" className="popup__form popup__form_type_add">
          <h3 className="popup__title">{props.title}</h3>
          <fieldset className="popup__fieldset">
            {props.children}
          </fieldset>
          <button type="submit" className="popup__button-submit button button_type_save">{props.buttonTitle}</button>
        </form>
      </div>
    </div>
  )
}
export default PopupWithForm;
