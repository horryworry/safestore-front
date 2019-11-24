import React from "react";
import MainNavDropdown from "./MainNavDropdown";

const MainNav = () => (
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
            </li>
            <li className="main-nav__item">
                <a href="" className="main-nav__link">Аксессуары и запчасти</a>
            </li>
            <li className="main-nav__item">
                <a href="" className="main-nav__link">Еще</a>
            </li>
        </ul>
    </nav>
);

export default MainNav;