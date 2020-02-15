import React, { Component } from "react";
import logo from "../../static/images/general/logoo.png";
import address from "../../static/images/general/address.png";
import basket from "../../static/images/general/shopping-basket.png";

class HeaderMain extends Component {

    checkWhatPageItIs = () => {
        if (window.location.pathname == "/index.html") {
            return(
                <div className="header__logo logo">
                    <img src={logo} alt="Логотип" className="logo__img"/>
                </div>
            );
        } else {
            return(
                <a href="index.html" className="header__logo logo">
                    <img src={logo} alt="Логотип" className="logo__img"/>
                </a>
            );
        }
    };

    render() {
        return(
            <div className="header__main">
                <div className="container">
                    <div className="header__content">
                        {this.checkWhatPageItIs()}

                        <div className="header__phones">
                            <div className="header__item header__item--mobile">
                                <a href="tel:+996700391252" className="header__phone">+996 (700) 39-12-52</a>
                                <a href="/#" className="header__link">Заказать звонок</a>
                            </div>
                            <div className="header__item">
                                <a href="tel:+996700391252" className="header__phone">+996 (700) 39-12-52</a>
                                <a href="/#" className="header__description">Звонок бесплатный</a>
                            </div>
                        </div>
                        <div className="header__address header-address">
                            <img src={address} alt={""} className="header-address__icon"/>
                            <span className="header-address__text">ул. Советская дом 61, г.Бишкек, Киргизия</span>
                        </div>
                        <div className="header__shop">
                            <div className="header-goods">
                        <span className="header-goods__price">
                            0 &#8381;
                        </span>
                                <span className="header-goods__count">
                            0 товаров
                        </span>
                            </div>
                            <div className="header-basket">
                                <img src={basket} alt={""} className="header-basket__icon"/>
                                <span className="header-basket__text">
                            Корзина
                        </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderMain;