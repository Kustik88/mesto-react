import React from "react"
import PopupWithForm from "./PopupWithForm"
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext)
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')

  React.useEffect(() => {
    setName(currentUser.name)
    setDescription(currentUser.about)
  }, [currentUser])

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm title='Редактировать профиль'
      name='profile-edit'
      buttonText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <div className="popup__input-container">
        <input
          type="text"
          onChange={handleNameChange}
          className="popup__input"
          name="name"
          id="name-input"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required />
        <span className="popup__input-error" id="name-input-error" />
        <input
          type="text"
          onChange={handleDescriptionChange}
          className="popup__input"
          name="description"
          id="description-input"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required />
        <span className="popup__input-error" id="description-input-error" />
      </div>
    </PopupWithForm>
  )
}

export default EditProfilePopup
