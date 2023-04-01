import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
    <div className="page">
      <section class="popup popup_type_profile-edit">
        <div class="popup__container">
          <button class="popup__close-btn" aria-label="Закрыть" type="button"></button>
          <form class="popup__form" name="popup-form" novalidate>
            <h2 class="popup__heading">Редактировать профиль</h2>
            <div class="popup__input-container">
              <input type="text" class="popup__input" name="owner" id="owner-input" placeholder="Имя" minlength="2"
                maxlength="40" required />
              <span class="popup__input-error" id="owner-input-error"></span>
              <input type="text" class="popup__input" name="job" id="job-input" placeholder="О себе" minlength="2"
                maxlength="200" required />
              <span class="popup__input-error" id="job-input-error"></span>
            </div>
            <button type="submit" class="popup__submit-btn"></button>
          </form>
        </div>
      </section>
      <section class="popup popup_type_avatar-edit">
        <div class="popup__container popup__container_size_average">
          <button class="popup__close-btn" aria-label="Закрыть" type="button"></button>
          <form class="popup__form" name="popup-form" novalidate>
            <h2 class="popup__heading">Обновить аватар</h2>
            <div class="popup__input-container">
              <input type="url" class="popup__input" name="avatar" id="avatar-input" placeholder="Ссылка на картинку"
                required />
              <span class="popup__input-error" id="avatar-input-error"></span>
            </div>
            <button type="submit" class="popup__submit-btn"></button>
          </form>
        </div>
      </section>
      <section class="popup popup_type_add-card">
        <div class="popup__container">
          <button class="popup__close-btn" aria-label="Закрыть" type="button"></button>
          <form class="popup__form" name="popup-form" novalidate>
            <h2 class="popup__heading">Новое место</h2>
            <div class="popup__input-container">
              <input type="text" class="popup__input" name="name" id="title-input" placeholder="Название" minlength="2"
                maxlength="30" required />
              <span class="popup__input-error" id="title-input-error"></span>
              <input type="url" class="popup__input" name="link" id="url-input" placeholder="Ссылка на картинку" required />
              <span class="popup__input-error" id="url-input-error"></span>
            </div>
            <button type="submit" class="popup__submit-btn"></button>
          </form>
        </div>
      </section>
      <section class="popup popup_type_delete-card">
        <div class="popup__container popup__container_size_small">
          <button class="popup__close-btn" aria-label="Закрыть" type="button"></button>
          <form class="popup__form" name="popup-form">
            <h2 class="popup__heading">Вы уверены?</h2>
            <button type="submit" class="popup__submit-btn">Да</button>
          </form>
        </div>
      </section>
      <section class="popup popup_type_image popup_background-blackout_hard">
        <figure class="popup__figure">
          <button class="popup__close-btn" aria-label="Закрыть" type="button"></button>
          <img class="popup__image" src="#" alt="картинка" />
          <figcaption class="popup__caption"></figcaption>
        </figure>
      </section>

      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
