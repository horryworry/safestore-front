import React, { Component } from "react";
import right from "../../static/images/general/arrowright.png";

class MainNavDropdown extends Component {
    render() {
        return(
            <div className="main-nav__dropdown-wrapper">
                <div className="main-nav__dropdown">
                    <ul className="catalog-nav__list">
                        <li className="catalog-nav__item">
                            <a href="/#" className="catalog-nav__link">
                                <span className="catalog-nav__text">
                                    Взрослые самокаты
                                </span>
                                <img src={right} alt={""} className="catalog-nav__icon"/>
                            </a>
                            <ul className="catalog-nav__list">
                                <li className="catalog-nav__item">
                                    <a href="/#" className="catalog-nav__link">
                                        <span className="catalog-nav__text">
                                            Детские двухколесные самокаты
                                        </span>
                                    </a>
                                </li>
                                <li className="catalog-nav__item">
                                    <a href="/#" className="catalog-nav__link">
                                        <span className="catalog-nav__text">
                                            Детские трехколесные самокаты
                                        </span>
                                    </a>
                                </li>
                                <li className="catalog-nav__item">
                                    <a href="/#" className="catalog-nav__link">
                                        <span className="catalog-nav__text">
                                            Детские самокаты с большими колесами
                                        </span>
                                    </a>
                                </li>
                                <li className="catalog-nav__item">
                                    <a href="/#" className="catalog-nav__link">
                                        <span className="catalog-nav__text">
                                            Детские самокаты с надувными колесами
                                        </span>
                                    </a>
                                </li>
                                <li className="catalog-nav__item">
                                    <a href="/#" className="catalog-nav__link">
                                        <span className="catalog-nav__text">
                                            Детские двухколесные самокаты
                                        </span>
                                    </a>
                                </li>
                                <li className="catalog-nav__item">
                                    <a href="/#" className="catalog-nav__link">
                                        <span className="catalog-nav__text">
                                            Детские трехколесные самокаты
                                        </span>
                                    </a>
                                </li>
                                <li className="catalog-nav__item">
                                    <a href="/#" className="catalog-nav__link">
                                        <span className="catalog-nav__text">
                                            Детские самокаты с большими колесами
                                        </span>
                                    </a>
                                </li>
                                <li className="catalog-nav__item">
                                    <a href="/#" className="catalog-nav__link">
                                        <span className="catalog-nav__text">
                                            Детские самокаты с надувными колесами
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="catalog-nav__item">
                            <a href="/#" className="catalog-nav__link">
                            <span className="catalog-nav__text">
                                Детские самокаты
                            </span>
                                <img src={right} alt={""} className="catalog-nav__icon"/>
                            </a>
                        </li>
                        <li className="catalog-nav__item">
                            <a href="/#" className="catalog-nav__link">
                        <span className="catalog-nav__text">
                            Городские самокаты
                        </span>
                                <img src={right} alt={""} className="catalog-nav__icon"/>
                            </a>
                        </li>
                        <li className="catalog-nav__item">
                            <a href="/#" className="catalog-nav__link">
                        <span className="catalog-nav__text">
                            Складные самокаты
                        </span>
                                <img src={right} alt={""} className="catalog-nav__icon"/>
                            </a>
                        </li>
                        <li className="catalog-nav__item">
                            <a href="/#" className="catalog-nav__link">
                        <span className="catalog-nav__text">
                            Трюковые самокаты
                        </span>
                                <img src={right} alt={""} className="catalog-nav__icon"/>
                            </a>
                        </li>
                        <li className="catalog-nav__item">
                            <a href="/#" className="catalog-nav__link">
                        <span className="catalog-nav__text">
                            Электросамокаты
                        </span>
                                <img src={right} alt={""} className="catalog-nav__icon"/>
                            </a>
                        </li>
                        <li className="catalog-nav__item">
                            <a href="/#" className="catalog-nav__link">
                        <span className="catalog-nav__text">
                            Самокаты с двумя амортизаторами
                        </span>
                                <img src={right} alt={""} className="catalog-nav__icon"/>
                            </a>
                        </li>
                        <li className="catalog-nav__item">
                            <a href="/#" className="catalog-nav__link">
                        <span className="catalog-nav__text">
                            Самокаты Globber
                        </span>
                                <img src={right} alt={""} className="catalog-nav__icon"/>
                            </a>
                        </li>
                        <li className="catalog-nav__item">
                            <a href="/#" className="catalog-nav__link">
                        <span className="catalog-nav__text">
                            Самокаты Micro
                        </span>
                                <img src={right} alt={""} className="catalog-nav__icon"/>
                            </a>
                        </li>
                        <li className="catalog-nav__item">
                            <a href="/#" className="catalog-nav__link">
                        <span className="catalog-nav__text">
                            Самокаты от года
                        </span>
                                <img src={right} alt={""} className="catalog-nav__icon"/>
                            </a>
                        </li>
                        <li className="catalog-nav__item">
                            <a href="/#" className="catalog-nav__link">
                        <span className="catalog-nav__text">
                            Самокаты Puky
                        </span>
                                <img src={right} alt={""} className="catalog-nav__icon"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MainNavDropdown;