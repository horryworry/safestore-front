import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCategories } from "../../actions/categoryActions";

import MainNavDropdown from "./MainNavDropdown";
import MainNavDropdown2 from "./MainNavDropdown-2";
import MainNavDropdown3 from "./MainNavDropdown-3";

import arrowDown from "../../static/images/general/arrow-down.png";

class MainNav extends Component {

    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {

        if (this.props.categories.data) {

            const categoryItems = this.state.categories.data.map(category => (
                <li key={category.id} className="main-nav__item">
                    <a href="/#" className="main-nav__link">{category.name}</a>
                    {
                        category.product &&
                        <MainNavDropdown/>
                    }
                </li>
            ));

            return(
                <nav className="header__main-nav main-nav">
                    <ul className="main-nav__list">
                        {categoryItems}
                    </ul>
                </nav>
            );
        } else {
            return(
                <nav className="header__main-nav main-nav">
                    <ul className="main-nav__list">
                        <li className="main-nav__item">
                            <a href="/#" className="main-nav__link">Самокаты</a>
                            <MainNavDropdown/>
                        </li>
                        <li className="main-nav__item">
                            <a href="/#" className="main-nav__link">Беговелы</a>
                        </li>
                        <li className="main-nav__item">
                            <a href="/#" className="main-nav__link">Велосипеды</a>
                        </li>
                        <li className="main-nav__item">
                            <a href="/#" className="main-nav__link">Ролики</a>
                        </li>
                        <li className="main-nav__item">
                            <a href="/#" className="main-nav__link">Скейты</a>
                        </li>
                        <li className="main-nav__item">
                            <a href="/#" className="main-nav__link">Батуты</a>
                            <MainNavDropdown2/>
                        </li>
                        <li className="main-nav__item">
                            <a href="/#" className="main-nav__link">Аксессуары и запчасти</a>
                        </li>
                        <li className="main-nav__item">
                            <a href="/#" className="main-nav__link">
                                Еще
                                <img src={arrowDown} alt={""} className="main-nav__icon"/>
                            </a>
                            <MainNavDropdown3/>
                        </li>
                    </ul>
                </nav>
            );
        }
    }
}

MainNav.propTypes = {
    fetchCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    categories: state.categories.items
});

export default connect(mapStateToProps, { fetchCategories })(MainNav);