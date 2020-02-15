import React, { Component } from 'react';
import orangeStar from "../../../../static/images/general/orangeStar.png";
import star from "../../../../static/images/general/star.png";

class Tab3 extends Component {

    getReviewRow = (label, value) => {
        return(
            <div className="review__row">
                <span className="review__label">
                    {label}
                </span>
                <span className="review__value">
                    {value}
                </span>
            </div>
        )
    }

    render() {
        return(
            <div className="reviews">
                <div className="reviews__header">
                    <h2 className="title-section">
                        Отзывы
                    </h2>
                    <div className="product-rating">
                        <div className="product-rating__stars">
                            <img src={orangeStar} className="product-rating__icon product-rating__icon--active"/>
                            <img src={orangeStar} className="product-rating__icon product-rating__icon--active"/>
                            <img src={orangeStar} className="product-rating__icon product-rating__icon--active"/>
                            <img src={orangeStar} className="product-rating__icon product-rating__icon--active"/>
                            <img src={star} className="product-rating__icon"/>
                        </div>
                        <span className="product__text">
                            4.0 балла на основе 3 оценок
                    </span>
                    </div>
                    <a href="" className="btn btn--bg-orange btn--inline review__add">Оставить отзыв</a>
                </div>
                <div className="reviews__body">
                    <div className="review">
                        <div className="review__header">
                            <div className="review-author__photo-wrapper">
                                <img src="http://via.placeholder.com/70x70" alt="Фото профиля" className="review__author__photo"/>
                            </div>
                            <div className="review-author__info">
                                <span className="review-author__name">
                                    Диана Старикова
                                </span>
                                <span className="review-author__mark">
                                    Оценка: 5
                                </span>
                            </div>
                        </div>
                        <div className="review__body">
                            {this.getReviewRow('Достоинства', 'Хороший айфон')}
                            {this.getReviewRow('Недостатки', 'Нет')}
                            {this.getReviewRow('Комментарий', 'У меня два мальчика и оба в восторге от айфонов, безопасный и модный')}
                        </div>
                    </div>
                    <div className="review">
                        <div className="review__header">
                            <div className="review-author__photo-wrapper">
                                <span className="review__author__photo-text">
                                    E
                                </span>
                            </div>
                            <div className="review-author__info">
                                <span className="review-author__name">
                                    Елена
                                </span>
                                <span className="review-author__mark">
                                    Оценка: 3
                                </span>
                            </div>
                        </div>
                        <div className="review__body">
                            {this.getReviewRow('Достоинства', 'Неплохой айфон')}
                            {this.getReviewRow('Недостатки', 'Сломался через месяц')}
                            {this.getReviewRow('Комментарий', 'Пришлось сдать в сервисный центр')}
                        </div>
                    </div>
                    <div className="review">
                        <div className="review__header">
                            <div className="review-author__photo-wrapper">
                                <span className="review__author__photo-text">
                                    П
                                </span>
                            </div>
                            <div className="review-author__info">
                                <span className="review-author__name">
                                    Павел
                                </span>
                                <span className="review-author__mark">
                                    Оценка: 4
                                </span>
                            </div>
                        </div>
                        <div className="review__body">
                            {this.getReviewRow('Достоинства', 'Нормальный телефон')}
                            {this.getReviewRow('Недостатки', 'Не обнаружил')}
                            {this.getReviewRow('Комментарий', 'Довольно приятно выглядящий телефон')}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tab3;
