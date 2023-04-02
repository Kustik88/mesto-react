import React from "react"

function ImagePopup(props) {
    return (
        <section className="popup popup_type_image popup_background-blackout_hard">
            <figure className="popup__figure">
                <button className="popup__close-btn" aria-label="Закрыть" type="button"></button>
                <img className="popup__image" src="#" alt="картинка" />
                <figcaption className="popup__caption"></figcaption>
            </figure>
        </section>
    )
}

export default ImagePopup