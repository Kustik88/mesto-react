import React from "react"

export default function Card({cardData}) {
    return (
        <li className="card">
            <button className="card__delete-btn" aria-label="Удалить" type="button"></button>
            <img className="card__image" src={cardData.link} alt={cardData.name} />
            <div className="card__info">
                <h2 className="card__heading">{cardData.name}</h2>
                <div className="card__like-container">
                    <button className="card__like-icon" aria-label="Нравится" type="button"></button>
                    <div className="card__like-counter">{cardData.likes.length}</div>
                </div>
            </div>
        </li>
    )
}