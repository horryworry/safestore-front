import React, { Component } from "react";
import dots from "../../static/images/general/dots.png";

import {openHeaderSubnav} from "../../actions/headerTopActions";
import {closeHeaderSubnav} from "../../actions/headerTopActions";

import PropTypes from "prop-types";
import {connect} from "react-redux";
import ReactDOM from "react-dom";

class HeaderTop extends Component {

    getInformNav = () => {
        let data = ["Акции", "Оптовикам", "Новости", "Гарантии"];
        let table = [];
        for (let i = 0; i < data.length; i++) {
            table.push(
                <li className="inform-subnav__item" key={i}>
                    <a href="" className="inform-subnav__link">
                        {data[i]}
                    </a>
                </li>
            )
        }
        return table;
    };

    informNavLink = (link, text, additionalClass = "") => {
        return (
            <li className={`inform-nav__item ${additionalClass}`}>
                <a href={link} className="inform-nav__link">{text}</a>
            </li>
        )
    };

    toggleSubnav = () => {
        if (this.props.isHidden) {
            this.props.openHeaderSubnav()
        } else {
            this.props.closeHeaderSubnav()
        }
    };

    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);

        if (!domNode || !domNode.contains(event.target)) {
            this.props.closeHeaderSubnav();
        }
    };

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    render() {
        return(
            <div className="header__top">
                <div className="container">
                    <div className="header__content">
                        <nav className="header__nav inform-nav">
                            <ul className="header-nav__list">
                                {this.informNavLink("static-page.html", "О компании")}
                                {this.informNavLink("", "Доставка и оплата")}
                                {this.informNavLink("", "Акции", "inform-nav__tablet-hide")}
                                {this.informNavLink("", "Оптовикам", "inform-nav__tablet-hide")}
                                {this.informNavLink("", "Новости", "inform-nav__tablet-hide")}
                                {this.informNavLink("", "Гарантии", "inform-nav__tablet-hide")}
                                {this.informNavLink("", "Контакты")}
                                <li className={`inform-nav__tablet-toggle ${this.props.isHidden ? '' : 'inform-subnav--open'}`} onClick={this.toggleSubnav}>
                                    <img src={dots} alt="" className="inform-nav__tablet-icon"/>
                                    <div className="inform-subnav">
                                        <div className="inform-subnav__arrow">

                                        </div>
                                        <ul className="inform-subnav__list">
                                            {this.getInformNav()}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <nav className="header__nav header__nav--right inform-nav">
                            <ul className="header-nav__list">
                                {this.informNavLink("", "Регистрация")}
                                {this.informNavLink("", "Вход")}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

HeaderTop.propTypes = {
    isHidden: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    isHidden: state.headerTopDropdown.isHidden
});

export default connect(mapStateToProps, { openHeaderSubnav, closeHeaderSubnav })(HeaderTop);
