import React, { Component } from 'react';
import sale1 from "../../static/images/content/news/sale1.jpg";
import sale2 from "../../static/images/content/news/safe2.png";
import apple from "../../static/images/content/brands/appleBrand.png";

class Banner extends Component {

    returnMultipleItems = () => {
        let table = [];
        for (let i = 0; i < 4; i++) {
            table.push(
                <li className="brands__item" key={i}>
                    <a href="/#" className="brand">
                        <img src={apple} alt={""} className="brand__img"></img>
                        <span className="brand__name">
                            Apple
                        </span>
                    </a>
                </li>
            )
        }
        return table;
    };

    render() {
        return(
            <section className="s-information s-light-bg">
                <div className="container">
                    <div className="information">
                        <div className="information-item">
                            <div className="information-item__header">
                                <h2 className="title-section">
                                    Новости
                                </h2>
                            </div>
                            <div className="information-item__body">
                                <div className="news-prev__wrapper">
                                    <a href="/#" className="news-prev">
                                        <div className="news-prev__img" style={{backgroundImage: `url(${sale1})`}}>

                                        </div>
                                        <div className="news-prev__body">
                                            <span className="news-prev__title">
                                                Большая распродажа
                                            </span>
                                            <span className="news-prev__date">
                                                13 Июля 2020
                                            </span>
                                        </div>
                                    </a>
                                    <a href="/#" className="news-prev">
                                        <div className="news-prev__img" style={{backgroundImage: `url(${sale2})`}}>

                                        </div>
                                        <div className="news-prev__body">
                                        <span className="news-prev__title">
                                            Распродажа у нас в магазине
                                        </span>
                                            <span className="news-prev__date">
                                                13 Июля 2020
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="information-item__footer">
                                <a href="/#" className="information-item__link">
                                    Все новости
                                </a>
                            </div>
                        </div>

                        <div className="information-item">

                            <div className="information-item__header">
                                <h2 className="title-section">
                                    Отзывы
                                </h2>
                            </div>

                            <div className="information-item__body">
                                <div className="review-prev">
                                    <p className="review-prev__text">
                                        Заказали на вашем сайте в начале мая Macbook Pro для сына.
                                        Очень довольны покупкой!
                                        Ребенок с большой радостью играет на нем в игры.
                                        Сам по себе ноутбук замечательный и открывается легко и не зависает.
                                        Порадовала быстрая доставка, курьер привез макбук в день заказа.
                                    </p>
                                    <span className="review-prev__author">
                                        Александр
                                    </span>
                                </div>
                            </div>

                            <div className="information-item__footer">
                                <a href="/#" className="information-item__link">
                                    Все отзывы
                                </a>
                            </div>

                        </div>

                        <div className="information-item information-item--wide">

                            <div className="information-item__header">
                                <h2 className="title-section">
                                    Бренды
                                </h2>
                            </div>

                            <div className="information-item__body">
                                <div className="brands__wrapper">
                                    <ul className="brands__list brands__list--small">
                                        {this.returnMultipleItems()}
                                    </ul>
                                </div>
                            </div>

                            <div className="information-item__footer">
                                <a href="/#" className="information-item__link">
                                    Все бренды
                                </a>
                                <span className="information-item__count">
                                    (9)
                                </span>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;