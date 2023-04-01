import React from 'react';

function openPopup(selectorPopup) {
    document.querySelector(selectorPopup).classList.add('popup_opened')
}

function handleEditAvatarClick() {
    openPopup('.popup_type_avatar-edit')
}

function handleEditProfileClick() {
    openPopup('.popup_type_profile-edit')
}

function handleAddPlaceClick() {
    openPopup('.popup_type_add-card')
}


function Main() {
    return (
        <main className="content">
            <section className="profile">
                <button
                    className="profile__edit-avatar-btn"
                    aria-label="Изменить аватар"
                    type="button"
                    onClick={handleEditAvatarClick}
                >
                    <img className="profile__avatar" src="#" alt="#" />
                    <div className="profile__overlay-avatar-btn"></div>
                </button>
                <div className="profile__info">
                    <div className="profile__owner-container">
                        <h1 className="profile__owner">Жак</h1>
                        <button
                            className="profile__edit-btn"
                            aria-label="Изменить профиль"
                            type="button"
                            onClick={handleEditProfileClick}
                            >
                        </button>
                    </div>
                    <p className="profile__job"></p>
                </div>
                <button
                    className="profile__add-btn"
                    aria-label="Добавить место"
                    type="button"
                    onClick={handleAddPlaceClick}
                >
                </button>
            </section>
            <ul className="cards">
            </ul>
        </main>
    );
}

export default Main