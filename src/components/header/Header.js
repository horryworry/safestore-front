import React, { Component } from 'react';
import '../../static/styles/styles.scss';
import HeaderTop from './HeaderTop';

class Header extends Component {

    render() {
        return (
            <div>
                <header className="header">
                    <div className="container">
                        <HeaderTop/>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;