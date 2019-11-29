import React, { Component } from "react";
import right from "../../static/images/general/arrowright.png";

class MainNavDropdown extends Component {
    render() {
        return(
            <div className="main-nav__dropdown-wrapper">
                <div className="main-nav__dropdown">
                    <ul className="main-subnav__list">
                        <li className="main-subnav__item">
                            <a href="" className="main-subnav__link">
                        <span className="main-subnav__text">
                            Взрослые самокаты
                        </span>
                                <img src={right} className="main-subnav__icon"/>
                            </a>
                            <ul className="main-subnav__list">
                                <li className="main-subnav__item">
                                    <a href="" className="main-subnav__link">
                            <span className="main-subnav__text">
                                Детские двухколесные самокаты
                            </span>
                                    </a>
                                </li>
                                <li className="main-subnav__item">
                                    <a href="" className="main-subnav__link">
                            <span className="main-subnav__text">
                                Детские трехколесные самокаты
                            </span>
                                    </a>
                                </li>
                                <li className="main-subnav__item">
                                    <a href="" className="main-subnav__link">
                            <span className="main-subnav__text">
                                Детские самокаты с большими колесами
                            </span>
                                    </a>
                                </li>
                                <li className="main-subnav__item">
                                    <a href="" className="main-subnav__link">
                            <span className="main-subnav__text">
                                Детские самокаты с надувными колесами
                            </span>
                                    </a>
                                </li>
                                <li className="main-subnav__item">
                                    <a href="" className="main-subnav__link">
                            <span className="main-subnav__text">
                                Детские двухколесные самокаты
                            </span>
                                    </a>
                                </li>
                                <li className="main-subnav__item">
                                    <a href="" className="main-subnav__link">
                            <span className="main-subnav__text">
                                Детские трехколесные самокаты
                            </span>
                                    </a>
                                </li>
                                <li className="main-subnav__item">
                                    <a href="" className="main-subnav__link">
                            <span className="main-subnav__text">
                                Детские самокаты с большими колесами
                            </span>
                                    </a>
                                </li>
                                <li className="main-subnav__item">
                                    <a href="" className="main-subnav__link">
                            <span className="main-subnav__text">
                                Детские самокаты с надувными колесами
                            </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="main-subnav__item">
                            <a href="" className="main-subnav__link">
                            <span className="main-subnav__text">
                                Детские самокаты
                            </span>
                                <img src={right} className="main-subnav__icon"/>
                            </a>
                        </li>
                        <li className="main-subnav__item">
                            <a href="" className="main-subnav__link">
                        <span className="main-subnav__text">
                            Городские самокаты
                        </span>
                                <img src={right} className="main-subnav__icon"/>
                            </a>
                        </li>
                        <li className="main-subnav__item">
                            <a href="" className="main-subnav__link">
                        <span className="main-subnav__text">
                            Складные самокаты
                        </span>
                                <img src={right} className="main-subnav__icon"/>
                            </a>
                        </li>
                        <li className="main-subnav__item">
                            <a href="" className="main-subnav__link">
                        <span className="main-subnav__text">
                            Трюковые самокаты
                        </span>
                                <img src={right} className="main-subnav__icon"/>
                            </a>
                        </li>
                        <li className="main-subnav__item">
                            <a href="" className="main-subnav__link">
                        <span className="main-subnav__text">
                            Электросамокаты
                        </span>
                                <img src={right} className="main-subnav__icon"/>
                            </a>
                        </li>
                        <li className="main-subnav__item">
                            <a href="" className="main-subnav__link">
                        <span className="main-subnav__text">
                            Самокаты с двумя амортизаторами
                        </span>
                                <img src={right} className="main-subnav__icon"/>
                            </a>
                        </li>
                        <li className="main-subnav__item">
                            <a href="" className="main-subnav__link">
                        <span className="main-subnav__text">
                            Самокаты Globber
                        </span>
                                <img src={right} className="main-subnav__icon"/>
                            </a>
                        </li>
                        <li className="main-subnav__item">
                            <a href="" className="main-subnav__link">
                        <span className="main-subnav__text">
                            Самокаты Micro
                        </span>
                                <img src={right} className="main-subnav__icon"/>
                            </a>
                        </li>
                        <li className="main-subnav__item">
                            <a href="" className="main-subnav__link">
                        <span className="main-subnav__text">
                            Самокаты от года
                        </span>
                                <img src={right} className="main-subnav__icon"/>
                            </a>
                        </li>
                        <li className="main-subnav__item">
                            <a href="" className="main-subnav__link">
                        <span className="main-subnav__text">
                            Самокаты Puky
                        </span>
                                <img src={right} className="main-subnav__icon"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MainNavDropdown;