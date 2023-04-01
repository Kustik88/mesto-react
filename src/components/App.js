import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
    <div className="page">
      <section className="popup popup_type_profile-edit">
        <div className="popup__container">
          <button className="popup__close-btn" aria-label="Закрыть" type="button"></button>
          <form className="popup__form" name="popup-form" noValidate>
            <h2 className="popup__heading">Редактировать профиль</h2>
            <div className="popup__input-container">
              <input type="text" className="popup__input" name="owner" id="owner-input" placeholder="Имя" minLength="2"
                maxLength="40" required />
              <span className="popup__input-error" id="owner-input-error"></span>
              <input type="text" className="popup__input" name="job" id="job-input" placeholder="О себе" minLength="2"
                maxLength="200" required />
              <span className="popup__input-error" id="job-input-error"></span>
            </div>
            <button type="submit" className="popup__submit-btn">Сохранить</button>
          </form>
        </div>
      </section>
      <section className="popup popup_type_avatar-edit">
        <div className="popup__container popup__container_size_average">
          <button className="popup__close-btn" aria-label="Закрыть" type="button"></button>
          <form className="popup__form" name="popup-form" noValidate>
            <h2 className="popup__heading">Обновить аватар</h2>
            <div className="popup__input-container">
              <input type="url" className="popup__input" name="avatar" id="avatar-input" placeholder="Ссылка на картинку"
                required />
              <span className="popup__input-error" id="avatar-input-error"></span>
            </div>
            <button type="submit" className="popup__submit-btn">Сохранить</button>
          </form>
        </div>
      </section>
      <section className="popup popup_type_add-card">
        <div className="popup__container">
          <button className="popup__close-btn" aria-label="Закрыть" type="button"></button>
          <form className="popup__form" name="popup-form" noValidate>
            <h2 className="popup__heading">Новое место</h2>
            <div className="popup__input-container">
              <input type="text" className="popup__input" name="name" id="title-input" placeholder="Название" minLength="2"
                maxLength="30" required />
              <span className="popup__input-error" id="title-input-error"></span>
              <input type="url" className="popup__input" name="link" id="url-input" placeholder="Ссылка на картинку" required />
              <span className="popup__input-error" id="url-input-error"></span>
            </div>
            <button type="submit" className="popup__submit-btn">Сохранить</button>
          </form>
        </div>
      </section>
      <section className="popup popup_type_delete-card">
        <div className="popup__container popup__container_size_small">
          <button className="popup__close-btn" aria-label="Закрыть" type="button"></button>
          <form className="popup__form" name="popup-form">
            <h2 className="popup__heading">Вы уверены?</h2>
            <button type="submit" className="popup__submit-btn">Да</button>
          </form>
        </div>
      </section>
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
