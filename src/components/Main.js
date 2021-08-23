import React from 'react';
import Api from '../utils/Api';
import Card from './Card';
function Main(props) {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__card">
                    <div className="profile__avatar-container">
                        <img src="#" alt="аватар" className="profile__avatar" />
                        <button className="profile__button-edit-avatar" type="button"></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name"></h1>
                        <button className="profile__button-edit button button_type_edit" type="button"></button>
                        <p className="profile__about"></p>
                    </div>
                </div>
                <button className="profile__button-add button button_type_add" type="button"></button>
            </section>
            <section className="places">
                <ul className="places__cards"></ul>
            </section>
        </main>
    )
}
export default Main;
