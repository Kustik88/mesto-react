import React from "react"

export default function Card({card, onCardClick}) {
    function handleClick() {
        onCardClick(card);
      }

    return (
        <li className="card">
            <button className="card__delete-btn" aria-label="Удалить" type="button"></button>
            <img className="card__image" src={card.link} alt={card.name} onClick={handleClick} />
            <div className="card__info">
                <h2 className="card__heading">{card.name}</h2>
                <div className="card__like-container">
                    <button className="card__like-icon" aria-label="Нравится" type="button"></button>
                    <div className="card__like-counter">{card.likes.length}</div>
                </div>
            </div>
        </li>
    )
}