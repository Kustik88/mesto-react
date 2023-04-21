import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import api from '../utils/Api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' })
  const [currentUser, setCurrentUser] = React.useState({})
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getCurrentUser()
      .then(res => setCurrentUser(res))
  }, [])

  React.useEffect(() => {
    api.getCards()
      .then(dataCards => setCards(dataCards))
      .catch(err => console.log(err))
  }, [])

  function handleUpdateUser(props) {
    api.editUserInfo(props)
      .then(res => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch(err => console.log(err))
  }

  function handleUpdateAvatar(url) {
    api.editAvatarProfile(url)
    .then(res => {
      setCurrentUser(res)
      closeAllPopups()
    })
    .catch(err => console.log(err))
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    (isLiked
      ? api.unlikeCard(card._id)
      : api.likeCard(card._id))
      .then((newCard) => {
        const listCards = cards.map(card => card._id === newCard._id ? newCard : card)
        setCards(listCards)
      })
      .catch(err => console.log(err))
  }

  function handleCardDelete(cardId) {
    api.deleteCard(cardId)
      .then(() => {
        const listCards = cards.filter(elem => elem._id !== cardId)
        setCards(listCards)
      })
      .catch(err => console.log(err))
  }

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
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>

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
          listCards={cards}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
