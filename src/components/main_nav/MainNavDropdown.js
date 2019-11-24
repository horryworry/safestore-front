import React from "react";
import right from "../../static/images/general/arrowright.png";

const MainNavDropdown = () => (
    <div className="main-nav__dropdown">
        <div className="main-nav-col">
            <ul className="main-nav-dropdown__list">
                <li className="main-nav-dropdown__item">
                    <a href="" className="main-nav-dropdown__link">
                    <span className="main-nav-dropdown__text">
                        Взрослые самокаты
                    </span>
                        <img src={right} className="main-nav-dropdown__icon"/>
                    </a>
                    <ul className="main-subnav__list">

                    </ul>
                </li>
                <li className="main-nav-dropdown__item">
                    <a href="" className="main-nav-dropdown__link">
                                <span className="main-nav-dropdown__text">
                                    Детские самокаты
                                </span>
                        <img src={right} className="main-nav-dropdown__icon"/>
                    </a>
                </li>
                <li className="main-nav-dropdown__item">
                    <a href="" className="main-nav-dropdown__link">
                    <span className="main-nav-dropdown__text">
                        Городские самокаты
                    </span>
                        <img src={right} className="main-nav-dropdown__icon"/>
                    </a>
                </li>
            </ul>
        </div>
        <div className="main-nav-col">

        </div>
    </div>
);

export default MainNavDropdown;