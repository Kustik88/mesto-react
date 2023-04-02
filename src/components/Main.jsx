import React from 'react'
import api from '../utils/Api'
function Main({onEditProfile, onAddPlace, onEditAvatar}) {

    const [userName, setUserName] = React.useState('')
    const [userDescription, setUserDescription] = React.useState('')
    const [userAvatar, setUserAvatar] = React.useState('')

    React.useEffect(() => {
        api.getCurrentUser()
        .then(dataUser => {
            setUserName(dataUser.name)
            setUserDescription(dataUser.about)
            setUserAvatar(dataUser.avatar)
        })
        .catch(err => console.log(err))
    },[]) 

    return (
        <main className="content">
            <section className="profile">
                <button
                    className="profile__edit-avatar-btn"
                    aria-label="Изменить аватар"
                    type="button"
                    onClick={onEditAvatar}
                >
                    <img className="profile__avatar" src={userAvatar} alt={userName} />
                    <div className="profile__overlay-avatar-btn"></div>
                </button>
                <div className="profile__info">
                    <div className="profile__owner-container">
                        <h1 className="profile__owner">{userName}</h1>
                        <button
                            className="profile__edit-btn"
                            aria-label="Изменить профиль"
                            type="button"
                            onClick={onEditProfile}
                            >
                        </button>
                    </div>
                    <p className="profile__job">{userDescription}</p>
                </div>
                <button
                    className="profile__add-btn"
                    aria-label="Добавить место"
                    type="button"
                    onClick={onAddPlace}
                >
                </button>
            </section>
            <ul className="cards">
            </ul>
        </main>
    );
}

export default Main