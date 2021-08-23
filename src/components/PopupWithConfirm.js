import React from 'react';
function PopupWithConfirm() {
    return (
        <div className="popup popup_type_confirm">
            <div className="popup__container">
                <button className="popup__button-close button" type="button"></button>
                <form action="#" name="confirm" className="popup__form popup__form_type_confirm">
                    <h3 className="popup__title">Вы уверены?</h3>
                    <button type="submit" className="popup__button-submit button button_type_save">Да</button>
                </form>
            </div>
        </div>
    )
}
export default PopupWithConfirm;