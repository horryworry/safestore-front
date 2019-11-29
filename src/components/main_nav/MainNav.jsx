import React, { Component } from "react";

import MainNavDropdown from "./MainNavDropdown";
import MainNavDropdown_2 from "./MainNavDropdown-2";
import MainNavDropdown_3 from "./MainNavDropdown-3";

import arrowDown from "../../static/images/general/arrow-down.png";

class MainNav extends Component {
    render() {
        return(
            <nav className="header__main-nav main-nav">
                <ul className="main-nav__list">
                    <li className="main-nav__item">
                        <a href="" className="main-nav__link">Самокаты</a>
                        <MainNavDropdown/>
                    </li>
                    <li className="main-nav__item">
                        <a href="" className="main-nav__link">Беговелы</a>
                    </li>
                    <li className="main-nav__item">
                        <a href="" className="main-nav__link">Велосипеды</a>
                    </li>
                    <li className="main-nav__item">
                        <a href="" className="main-nav__link">Ролики</a>
                    </li>
                    <li className="main-nav__item">
                        <a href="" className="main-nav__link">Скейты</a>
                    </li>
                    <li className="main-nav__item">
                        <a href="" className="main-nav__link">Батуты</a>
                        <MainNavDropdown_2/>
                    </li>
                    <li className="main-nav__item">
                        <a href="" className="main-nav__link">Аксессуары и запчасти</a>
                    </li>
                    <li className="main-nav__item">
                        <a href="" className="main-nav__link">
                            Еще
                            <img src={arrowDown} className="main-nav__icon"/>
                        </a>
                        <MainNavDropdown_3/>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default MainNav;