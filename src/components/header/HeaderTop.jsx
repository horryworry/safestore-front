import React, { Component } from "react";

function headerNavLink(link, text) {
    return (
        <li className="header-nav__item">
            <a href={link} className="header-nav__link">{text}</a>
        </li>
    );
}

class HeaderTop extends Component {

    render() {
        return(
            <div className="header__top">
                <div className="container">
                    <div className="header__content">
                        <nav className="header__nav header-nav">
                            <ul className="header-nav__list">
                                {headerNavLink("", "О компании")}
                                {headerNavLink("", "Доставка и оплата")}
                                {headerNavLink("", "Акции")}
                                {headerNavLink("", "Оптовикам")}
                                {headerNavLink("", "Новости")}
                                {headerNavLink("", "Гарантии")}
                                {headerNavLink("", "Контакты")}
                            </ul>
                        </nav>
                        <nav className="header__nav header__nav--right header-nav">
                            <ul className="header-nav__list">
                                {headerNavLink("", "Регистрация")}
                                {headerNavLink("", "Вход")}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderTop;