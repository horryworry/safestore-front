import React, { Component } from 'react';
import '../../static/styles/styles.scss';
import HeaderTop from './HeaderTop';
import HeaderMain from "./HeaderMain";
import HeaderMenu from "./HeaderMenu";
import HeaderMobile from "./Header-mobile";

class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <HeaderTop/>
                    <HeaderMain/>
                    <HeaderMenu/>
                    <HeaderMobile/>
                </header>
            </div>
        );
    }
}

export default Header;
