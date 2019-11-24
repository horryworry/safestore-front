import React, { Component } from 'react';
import '../../static/styles/styles.scss';
import HeaderTop from './HeaderTop';
import HeaderMain from "./HeaderMain";
import HeaderMenu from "./HeaderMenu";

class Header extends Component {

    render() {
        return (
            <div>
                <header className="header">
                    <HeaderTop/>
                    <HeaderMain/>
                    <HeaderMenu/>
                </header>
            </div>
        );
    }

}

export default Header;
