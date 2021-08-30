import React from 'react';
function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }
    return (
        <li className="place">
            <button className="place__button-remove button"></button>
            <figure className="place__card">
                <div className="place__image" onClick={handleClick} style={{ backgroundImage: `url(${props.card.link})`, backgroundSize: 'Cover' }}></div>
                <figcaption className="place__caption">
                    <h2 className="place__name">{props.card.name}</h2>
                    <div className="place__like-container">
                        <button className="place__button-like button button_type_like" type="button"></button>
                        <span className="place__counter-likes">{props.card.likes.length}</span>
                    </div>
                </figcaption>
            </figure>
        </li>
    )
}
export default Card;
