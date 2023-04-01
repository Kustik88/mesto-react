import React from 'react';

function Main() {
    return (
        <main className="content">
            <section className="profile">
                <img className="profile__avatar" src="./images/avatar-kusto.jpg" alt="Жак-Ив Кусто" />
                <div className="profile__info">
                    <div className="profile__owner-container">
                        <h1 className="profile__owner">Жак-Ив Кусто</h1>
                        <button className="profile__edit-btn" aria-label="Изменить профиль" type="button"></button>
                    </div>
                    <p className="profile__job">Исследователь океана</p>
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