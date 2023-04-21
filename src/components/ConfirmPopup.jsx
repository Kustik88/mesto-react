import React from "react"
import PopupWithForm from "./PopupWithForm"

function ConfirmPopup({ isOpen, onClose, onConfirm }) {

  function handleSubmit(e) {
    e.preventDefault()
    onConfirm()
  }

  return(
    <PopupWithForm
    title='Вы уверены'
    name='delete-card'
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
    buttonText='Да'
    classPopupContainer='popup__container_size_small' />
  )
}

export default ConfirmPopup
