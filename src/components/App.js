import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {
  return (
    <div className="page">
      <PopupWithForm title='Редактировать профиль' name='profile-edit' buttonText='Сохранить'>
        <div className="popup__input-container">
          <input type="text" className="popup__input" name="owner" id="owner-input" placeholder="Имя" minLength="2"
            maxLength="40" required />
          <span className="popup__input-error" id="owner-input-error"></span>
          <input type="text" className="popup__input" name="job" id="job-input" placeholder="О себе" minLength="2"
            maxLength="200" required />
          <span className="popup__input-error" id="job-input-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm title='Обновить аватар' name='avatar-edit' buttonText='Сохранить' classPopupContainer='popup__container_size_average'>
        <div className="popup__input-container">
          <input type="url" className="popup__input" name="avatar" id="avatar-input" placeholder="Ссылка на картинку"
            required />
          <span className="popup__input-error" id="avatar-input-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm title='Новое место' name='add-card' buttonText='Сохранить'>
        <div className="popup__input-container">
          <input type="text" className="popup__input" name="name" id="title-input" placeholder="Название" minLength="2"
            maxLength="30" required />
          <span className="popup__input-error" id="title-input-error"></span>
          <input type="url" className="popup__input" name="link" id="url-input" placeholder="Ссылка на картинку" required />
          <span className="popup__input-error" id="url-input-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm title='Вы уверены' name='delete-card' buttonText='Да' classPopupContainer='popup__container_size_small'>
      </PopupWithForm>

      <section className="popup popup_type_image popup_background-blackout_hard">
        <figure className="popup__figure">
          <button className="popup__close-btn" aria-label="Закрыть" type="button"></button>
          <img className="popup__image" src="#" alt="картинка" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </section>

      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;