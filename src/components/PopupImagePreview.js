import React from 'react';
function PopupImagePreview() {
    return (
        <div className="popup popup_type_image">
            <div className="popup__image-container">
                <button className="popup__button-close button" type="button"></button>
                <figure className="popup__caption-container">
                    <img src="#" alt="#" className="popup__image" />
                    <figcaption className="popup__caption">
                        <h2 className="popup__place-caption"></h2>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default PopupImagePreview;