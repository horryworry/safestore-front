import React, { Component } from 'react';
import clear from "../../static/images/general/close-button.png";

class HeaderMobile extends Component {
    render() {
        return(
            <div className="header__mobile">
                <div className="container">
                    <nav className="mobile-nav">
                        <div className="mobile-nav__header">
                            <div className="mobile-nav__sandwich sandwich">
                                <div className="sandwich__line sandwich__line--top">

                                </div>
                                <div className="sandwich__line sandwich__line--middle">

                                </div>
                                <div className="sandwich__line sandwich__line--bottom">

                                </div>
                            </div>
                            <div className="mobile-nav__title">
                                Каталог товаров
                            </div>
                        </div>
                        <div className="mobile-nav__body">
                            <ul className="mobile-nav__list">

                            </ul>
                        </div>
                    </nav>

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

                </div>
            </div>
        );
    }
}

export default HeaderMobile;