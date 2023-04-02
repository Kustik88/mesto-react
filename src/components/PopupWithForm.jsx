import React from "react"

function PopupWithForm({ title, name, children, buttonText, classPopupContainer }) {
    return (
        <section className={`popup popup_type_${name}`}>
            <div className={`popup__container ${classPopupContainer}`}>
                <button className="popup__close-btn" aria-label="Закрыть" type="button"></button>
                <form className="popup__form" name={`popup-form-${name}`} noValidate>
                    <h2 className="popup__heading">{title}</h2>
                    {children}
                    <button type="submit" className="popup__submit-btn">{buttonText}</button>
                </form>
            </div>
        </section>
    )
}

export default PopupWithForm