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
    e.preventDefault();
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
          value={name}
          onChange={handleNameChange}
          className="popup__input"
          name="owner"
          id="owner-input"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required />
        <span className="popup__input-error" id="owner-input-error" />
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          className="popup__input"
          name="job"
          id="job-input"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required />
        <span className="popup__input-error" id="job-input-error" />
      </div>
    </PopupWithForm>
  )
}

export default EditProfilePopup
