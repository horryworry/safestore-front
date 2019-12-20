import React, { Component } from 'react';
import clear from "../../static/images/general/close-button.png";
import chevronRight from "../../static/images/general/arrowright.png";
import closeButton from "../../static/images/general/close-button.png";
import logo from "../../static/images/general/logoo.png";
import basket from "../../static/images/general/shopping-basket.png";
import user from "../../static/images/general/user.png";
import search from "../../static/images/general/search.png";

class HeaderMobile extends Component {

    state = {
        isMenuVisible: false
    };

    toggleMenu = () => {
        this.setState(prevState => ({ isMenuVisible: !prevState.isMenuVisible }));
    };

    mainSubnavLink = (link, text) => {
        return(
            <li className="catalog-nav__item">
                <a href={link} className="catalog-nav__link">
                    <span className="catalog-nav__text">
                        {text}
                    </span>
                    <img src={chevronRight} alt="" className="catalog-nav__icon"/>
                </a>
            </li>
        );
    };

    informNavLink = (link, text) => {
        return(
            <li className="inform-nav__item">
                <a href={link} className="inform-nav__link">
                    {text}
                </a>
            </li>
        );
    };

    render() {

        const { isMenuVisible } = this.state;

        return(
            <div className="header__mobile">
                <div className="container">
                    <div className={`mobile-menu ${isMenuVisible ? "mobile-menu--open" : ""}`}>
                        <div className="mobile-menu__toggle" onClick={this.toggleMenu}>
                            <div className="mobile-menu__sandwich sandwich">
                                <div className="sandwich__line sandwich__line--top">

                                </div>
                                <div className="sandwich__line sandwich__line--middle">

                                </div>
                                <div className="sandwich__line sandwich__line--bottom">

                                </div>
                            </div>
                            <span className="mobile-menu__title">
                                Каталог товаров
                            </span>
                        </div>
                        <div className="mobile-menu__content">
                            <div className="mobile-menu__header">
                                <span className="mobile-menu__title">
                                    Меню
                                </span>
                                <div className="mobile-menu__close" onClick={this.toggleMenu}>
                                    <img src={closeButton} alt="" className="mobile-menu__close-icon"/>
                                </div>
                            </div>
                            <div className="mobile-menu__body">
                                <nav className="catalog-nav">
                                    <ul className="catalog-nav__list">
                                        {this.mainSubnavLink('', 'iPhone')}
                                        {this.mainSubnavLink('', 'Macbook')}
                                        {this.mainSubnavLink('', 'Macbook Mini')}
                                        {this.mainSubnavLink('', 'Apple Watch')}
                                        {this.mainSubnavLink('', 'iPad')}
                                        {this.mainSubnavLink('', 'Apple TV')}
                                    </ul>
                                </nav>
                                <nav className="inform-nav inform-nav--col">
                                    <ul className="inform-nav__list">
                                        {this.informNavLink('', 'О компании')}
                                        {this.informNavLink('', 'Доставка и оплата')}
                                        {this.informNavLink('', 'Акции')}
                                        {this.informNavLink('', 'Оптовикам')}
                                        {this.informNavLink('', 'Новости')}
                                        {this.informNavLink('', 'Гарантии')}
                                        {this.informNavLink('', 'Контакты')}
                                    </ul>
                                </nav>
                            </div>
                            <div className="mobile-menu__footer">
                                <div className="mobile-menu__phone">
                                    <a href="tel:+996700391252" className="mobile-menu__phone-number">
                                        +996 (700) 39-12-52
                                    </a>
                                    <a href="" className="mobile-menu__phone-link">
                                        Заказать звонок
                                    </a>
                                </div>
                                <div className="mobile-menu__phone">
                                    <a href="tel:+996700391252" className="mobile-menu__phone-number">
                                        +996 (700) 39-12-52
                                    </a>
                                    <span className="mobile-menu__phone-text">
                                        Звонок бесплатный
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile__logo logo">
                        <img src={logo} alt="Логотип" className="logo__img"/>
                    </div>
                    <div className="search">
                        <form className="search__form">
                            <div className="search__input-wrapper">
                                <input placeholder="Я хочу купить..." className="search__input"/>
                                <div className="search__clear">
                                    <img src={clear} className="search__clear-icon"/>
                                </div>
                            </div>
                            <input type="submit" value="Найти" className="search__btn"/>
                        </form>
                    </div>
                    <nav className="mobile-user-nav">
                        <ul className="mobile-user-nav__list">
                            <li className="mobile-user-nav__item">
                                <a href="mobile-user-nav__link">
                                    <img src={search} className="mobile-user-nav__icon"/>
                                </a>
                            </li>
                            <li className="mobile-user-nav__item">
                                <a href="mobile-user-nav__link">
                                    <img src={user} className="mobile-user-nav__icon"/>
                                </a>
                            </li>
                            <li className="mobile-user-nav__item">
                                <a href="mobile-user-nav__link">
                                    <img src={basket} className="mobile-user-nav__icon"/>
                                </a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        );
    }
}

export default HeaderMobile;
