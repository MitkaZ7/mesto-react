import React from 'react';
export default function PopupWithForm({ isOpen, onClose, onSubmit, ...props }) {
  return (
    <div className={`popup popup_type_${props.name} ${isOpen ? "popup_status_opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__button-close button" type="button" onClick={onClose}></button>
        <form action="#" name="popup-form" className="popup__form" onSubmit={onSubmit}>
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

