import React from 'react';

function Main() {
    return (
        <main className="content">
            <section className="profile">
                <button className="profile__edit-avatar-btn" aria-label="Изменить аватар" type="button">
                    <img className="profile__avatar" src="#" alt="#" />
                    <div className="profile__overlay-avatar-btn"></div>
                </button>
                <div className="profile__info">
                    <div className="profile__owner-container">
                        <h1 className="profile__owner"></h1>
                        <button className="profile__edit-btn" aria-label="Изменить профиль" type="button"></button>
                    </div>
                    <p className="profile__job"></p>
                </div>
                <button className="profile__add-btn" aria-label="Добавить место" type="button">
                </button>
            </section>
            <ul className="cards">
            </ul>
        </main>
    );
}

export default Main