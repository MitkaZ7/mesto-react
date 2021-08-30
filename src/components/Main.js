import React from 'react';
import api from '../utils/Api';
import Card from './Card';
function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userAbout, setUserAbout] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(()=>{
      Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardData]) => {
        setUserName(userData.name);
        setUserAbout(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardData);
      })
      .catch((error) => {
        console.log(error);
      })
    }, [])
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__card">
                    <div className="profile__avatar-container">
                        <div className="profile__avatar" style={{backgroundImage: `url(${userAvatar})`, backgroundSize: 'Cover'}}></div>
                        <button className="profile__button-edit-avatar" type="button" onClick={props.onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__button-edit button button_type_edit" type="button" onClick={props.onEditProfile}></button>
                        <p className="profile__about">{userAbout}</p>
                    </div>
                </div>
                <button className="profile__button-add button button_type_add" type="button" onClick={props.onAddCard}></button>
            </section>
            <section className="places">
                <ul className="places__cards">
                {cards.map((card) => {
                  return (<Card key={card._id} card={card} onCardClick={props.onCardClick} />)
                })}
                </ul>
            </section>
        </main>
    )
}
export default Main;
