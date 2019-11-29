import React, { Component } from "react";
import search from "../../static/images/general/search.png";
import MainNav from "../main_nav/MainNav";
import clear from "../../static/images/general/close-button.png";


class HeaderMenu extends Component {

    state = {
        isSearchVisible:false
    };

    toggleSearch = () => {
        this.setState(prevState => ({ isSearchVisible: !prevState.isSearchVisible }));
    };

    render() {

        const { isSearchVisible } = this.state;

        return (
            <div className="header__menu">
                <div className="container">
                    <div className="header__content">
                        <MainNav/>
                        <div className="header__search search">
                            <img src={search} className="search__icon" onClick={this.toggleSearch}/>
                            <div className="search__body">
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
                </div>
            </div>
        );

    }

}

export default HeaderMenu;
