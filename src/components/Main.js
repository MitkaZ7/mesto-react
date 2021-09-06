import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';
function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);
    // const [userName, setUserName] = React.useState(currentUser.userName);
    // const [userAbout, setUserAbout] = React.useState(currentUser.userAbout);
    // const [userAvatar, setUserAvatar] = React.useState(currentUser.userAvatar);


    // React.useEffect(()=>{
    //   Promise.all([api.getUserInfo(), api.getInitialCards()])
    //   .then(([cardData]) => {
    //     // setUserName(userData.name);
    //     // setUserAbout(userData.about);
    //     // setUserAvatar(userData.avatar);
    //     setCards(cardData);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    // }, [])
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__card">
                    <div className="profile__avatar-container">
                        <img className="profile__avatar" src={currentUser.userAvatar} alt='Аватар пользователя'/>
                        <button className="profile__button-edit-avatar" type="button" onClick={props.onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">{currentUser.userName}</h1>
                        <button className="profile__button-edit button button_type_edit" type="button" onClick={props.onEditProfile}></button>
                        <p className="profile__about">{currentUser.userAbout}</p>
                    </div>
                </div>
                <button className="profile__button-add button button_type_add" type="button" onClick={props.onAddCard}></button>
            </section>
            <section className="places">
                <ul className="places__cards">
                {props.cards.map((card) => {
                  return (<Card key={card._id} card={card} onCardClick={props.onCardClick} />)
                })}
                </ul>
            </section>
        </main>
    )
}
export default Main;
