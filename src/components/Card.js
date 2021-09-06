import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
export default function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwner = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(myLike => myLike._id === currentUser._id);
  const buttonLikeClassName = (`button_type_like ${isLiked ? 'button_type_like-active' : ''}`);

  function handleClick() {
    props.onCardClick(props.card);
  }
  function handleCardLike() {
    props.onCardLike(props.card);
  }
  function handleCardDelete() {
    props.onCardDelete(props.card);
  }

    return (
        <li className="place">
        {isOwner && <button className="place__button-remove button" onClick={handleCardDelete}></button>}
            <figure className="place__card">
                <div className="place__image" onClick={handleClick} style={{ backgroundImage: `url(${props.card.link})`}}></div>
                <figcaption className="place__caption">
                    <h2 className="place__name">{props.card.name}</h2>
                    <div className="place__like-container">
              <button className={buttonLikeClassName} type="button" onClick={handleCardLike}></button>
                        <span className="place__counter-likes">{props.card.likes.length}</span>
                    </div>
                </figcaption>
            </figure>
        </li>
    )
}

