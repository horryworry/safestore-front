import React from "react";
import search from "../../static/images/general/search.png";
import MainNav from "../main_nav/MainNav";

const HeaderMenu = () => (
    <div className="header__menu">
        <div className="container">
            <div className="header__content">
                <MainNav/>
                <div className="header__search search">
                    <img src={search} className="search__icon"/>
                </div>
            </div>
        </div>
    </div>
);

export default HeaderMenu;
