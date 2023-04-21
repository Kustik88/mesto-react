import React from "react"
import PopupWithForm from "./PopupWithForm"

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const nameCardRef = React.useRef('')
  const urlCardRef = React.useRef('')

  function handleNameCardChange(e) {
    nameCardRef.current = e.target.value
  }

  function handleUrlCardChange(e) {
    urlCardRef.current = e.target.value
  }

  function handleSubmit(e) {
    e.preventDefault()
    onAddPlace({
      name: nameCardRef.current,
      link: urlCardRef.current
    })
    onClose()
  }

  return (
    <PopupWithForm
      title='Новое место'
      name='add-card'
      buttonText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <div className="popup__input-container">
        <input
          type="text"
          ref={nameCardRef}
          onChange={handleNameCardChange}
          className="popup__input"
          name="name"
          id="title-input"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required />
        <span className="popup__input-error" id="title-input-error" />
        <input
          type="url"
          ref={urlCardRef}
          onChange={handleUrlCardChange}
          className="popup__input"
          name="link"
          id="url-input"
          placeholder="Ссылка на картинку"
          required />
        <span className="popup__input-error" id="url-input-error" />
      </div>
    </PopupWithForm>
  )
}

export default AddPlacePopup
