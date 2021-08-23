import React from 'react';
function Card() {
    return (
        <template className="card-template">
            <li className="place">
                <button className="place__button-remove button"></button>
                <figure className="place__card">
                    <img src="#" alt="#" className="place__image" />
                    <figcaption className="place__caption">
                        <h2 className="place__name"></h2>
                        <div className="place__like-container">
                            <button className="place__button-like button button_type_like" type="button"></button>
                            <span className="place__counter-likes"></span>
                        </div>
                    </figcaption>
                </figure>
            </li>
        </template>
    )
}
export default Card;