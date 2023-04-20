import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import api from '../utils/Api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' })
  const [currentUser, setCurrentUser] = React.useState({})

  React.useEffect(() => {
    api.getCurrentUser()
      .then(res => setCurrentUser(res))
  }, [])

  console.log(currentUser)
  console.log(CurrentUserContext)

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setSelectedCard({ name: '', link: '' })
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }
  function handleCardClick(card) {
    setSelectedCard(card)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <PopupWithForm
          title='Редактировать профиль'
          name='profile-edit' buttonText='Сохранить'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
          <div className="popup__input-container">
            <input type="text" className="popup__input" name="owner" id="owner-input" placeholder="Имя" minLength="2"
              maxLength="40" required />
            <span className="popup__input-error" id="owner-input-error" />
            <input type="text" className="popup__input" name="job" id="job-input" placeholder="О себе" minLength="2"
              maxLength="200" required />
            <span className="popup__input-error" id="job-input-error" />
          </div>
        </PopupWithForm>

        <PopupWithForm
          title='Обновить аватар'
          name='avatar-edit'
          buttonText='Сохранить'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          classPopupContainer='popup__container_size_average'>
          <div className="popup__input-container">
            <input type="url" className="popup__input" name="avatar" id="avatar-input" placeholder="Ссылка на картинку"
              required />
            <span className="popup__input-error" id="avatar-input-error" />
          </div>
        </PopupWithForm>

        <PopupWithForm
          title='Новое место'
          name='add-card'
          buttonText='Сохранить'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>
          <div className="popup__input-container">
            <input type="text" className="popup__input" name="name" id="title-input" placeholder="Название" minLength="2"
              maxLength="30" required />
            <span className="popup__input-error" id="title-input-error" />
            <input type="url" className="popup__input" name="link" id="url-input" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error" id="url-input-error" />
          </div>
        </PopupWithForm>

        <PopupWithForm title='Вы уверены' name='delete-card' buttonText='Да' classPopupContainer='popup__container_size_small' />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
