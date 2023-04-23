import { useEffect, useState } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'
import api from '../utils/Api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({ name: '', link: '' })
  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = useState([])

  useEffect(() => {
    api.getCurrentUser()
      .then(res => setCurrentUser(res))
      .catch(err => displayError(err))
  }, [])


  useEffect(() => {
    api.getCards()
      .then(dataCards => setCards(dataCards))
      .catch(err => displayError(err))
  }, [])

  function displayError(err) {
    console.log(err)
  }

  function handleUpdateUser(props) {
    api.editUserInfo(props)
      .then(res => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch(err => displayError(err))
  }

  function handleUpdateAvatar(url) {
    api.editAvatarProfile(url)
      .then(res => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch(err => displayError(err))
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    (isLiked
      ? api.unlikeCard(card._id)
      : api.likeCard(card._id))
      .then(newCard => setCards(cards => cards.map(c => c._id === newCard._id ? newCard : c)))
      .catch(err => displayError(err))
  }

  function handleCardAdd(card) {
    api.addCard(card)
      .then(newCard => {
        setCards([newCard, ...cards])
        closeAllPopups()
      })
      .catch(err => displayError(err))
  }

  function handleCardDelete(cardId) {
    api.deleteCard(cardId)
      .then(() => setCards(cards => cards.filter(card => card._id !== cardId)))
      .catch(err => displayError(err))
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
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleCardAdd} />

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
