import React from "react";
import right from "../../static/images/general/arrowright.png";

const MainNavDropdown = () => (
    <div className="main-nav__dropdown-wrapper">
        <div className="main-nav__dropdown">
            <div className="main-nav__col">
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
                </ul>
            </div>
            <div className="main-nav__col">

            </div>
        </div>
    </div>
);

export default MainNavDropdown;