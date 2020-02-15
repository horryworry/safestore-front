import React, {Component, Fragment} from "react";
import apple from "../../static/images/content/brands/appleBrand.png";
import orangeStar from "../../static/images/general/orangeStar.png";
import star from "../../static/images/general/star.png";
import wallet from "../../static/images/general/wallet.png";
import truck from "../../static/images/general/truck.png";
import map from "../../static/images/general/map.png";

class Info extends Component {

    getColors = () => {
        let table = []
        let colors = ['ff5ec9', '7ed321', 'f5a623']
        for (let i = 0; i < colors.length; i++) {
            table.push(
                <li className={`color-list__item ${this.props.activeColor == colors[i] ? 'color-list__item--active' : ''}`} key={i} style={{backgroundColor: `#${colors[i]}`}} onClick={(e) => this.props.changeActiveProductColor(colors[i])}>
                </li>
            )
        }
        return table
    };

    getAvailableProducts = () => {
        let table = []
        for (let i = 0; i < 5; i++) {
            table.push(
                <div className="product-available-view__item">
                </div>
            )
        }
        return table
    };

    getProductList = () => {
        let table = []
        let products = ['Наличные', 'Электронные деньги', 'Сбербанк', 'Безналичная оплата']
        for (let i = 0; i < products.length; i++) {
            table.push(
                <li className="product-list__item" key={i}>
                    {products[i]}
                </li>
            )
        }
        return table
    };


    render() {
        return(
            <div className="product-info">
                <div className="product-info__header">
                    <h1 className="title-page">
                        iPhone XS
                    </h1>
                    <img src={apple} alt={"Логотип бренда"} className="product-info__logo"></img>
                </div>
                <div className="product-info__body">
                    <div className="product-info__row">
                        <div className="product-rating">
                            <div className="product-rating__stars">
                                <img src={orangeStar} className="product-rating__icon product-rating__icon--active"/>
                                <img src={orangeStar} className="product-rating__icon product-rating__icon--active"/>
                                <img src={orangeStar} className="product-rating__icon product-rating__icon--active"/>
                                <img src={orangeStar} className="product-rating__icon product-rating__icon--active"/>
                                <img src={star} className="product-rating__icon"/>
                            </div>
                            <a href="" className="product-info__link">
                                3 отзыва
                            </a>
                        </div>
                        <div className="product-info__articul">
                            <span className="product__text">
                                Артикул: <b>3015</b>
                            </span>
                        </div>
                    </div>
                    <div className="product-info__row">
                        <div className="product-color">
                            <span className="product__text">
                                Выберите цвет
                            </span>
                            <ul className="color-list">
                                {this.getColors()}
                            </ul>
                        </div>
                        <div className="product-available">
                            <span className="product__text">
                                Наличие
                            </span>
                            <ul className="product-available-view">
                                {this.getAvailableProducts()}
                            </ul>
                        </div>
                    </div>
                    <div className="product-info__row">
                        <div className="product-price">
                            <span className="product-price__old">
                                4 999 руб.
                            </span>
                            <span className="product-price__current">
                                3 990 руб.
                            </span>
                            <a href="" className="product-info__link">Нашли дешевле?</a>
                        </div>
                        <div className="product-actions">
                            <button className="btn btn--big btn--bg-orange">Купить</button>
                            <button className="btn btn--contour-gray btn--big">Купить в 1 клик</button>
                        </div>
                    </div>
                </div>
                <div className="product-info__footer">
                    <div className="product-info-advantages">
                        <div className="product-info-advantage">
                            <div className="product-info-advantage__header">
                                <img src={wallet} alt="" className="product-info-advantage__icon"/>
                                <span className="product-info-advantage__title">
                                    Оплата
                                </span>
                            </div>
                            <div className="product-info-advantage__body">
                                <ul className="product-list product-list--advantage">
                                    {this.getProductList()}
                                </ul>
                            </div>
                        </div>
                        <div className="product-info-advantage">
                            <div className="product-info-advantage__header">
                                <img src={truck} alt="" className="product-info-advantage__icon"/>
                                <span className="product-info-advantage__title">
                                    Доставка
                                </span>
                            </div>
                            <div className="product-info-advantage__body">
                                <p className="product__text">По Бишкеку сегодня курьером - <b>бесплатно</b></p>
                                <p className="product__text">Самовывоз с нашего магазина - <b>бесплатно</b></p>
                            </div>
                        </div>
                        <div className="product-info-advantage">
                            <div className="product-info-advantage__header">
                                <img src={map} alt="" className="product-info-advantage__icon"/>
                                <span className="product-info-advantage__title">
                                    Самовывоз
                                </span>
                            </div>
                            <div className="product-info-advantage__body">
                                <p className="product__text">г.Бишкек, улица Советская, дом 61, павильон 1/2</p>
                                <a href="" className="product-info__link">Яндекс карты</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Info;