import React, { Component } from 'react';
import '../../static/styles/styles.scss';
import HeaderTop from './HeaderTop';
import HeaderMain from "./HeaderMain";

class Header extends Component {

    render() {
        return (
            <div>
                <header className="header">
                    <HeaderTop/>
                    <HeaderMain/>
                </header>
            </div>
        );
    }

}

export default Header;