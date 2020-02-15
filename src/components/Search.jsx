import React, {Component, Fragment} from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import clear from "../static/images/general/close-button.png";
import Prev_1 from "./products/Prev_1";
import Prev_2 from "./products/Prev_2";

import PropTypes from "prop-types";
import {connect} from "react-redux";

import {changeSearchString, hideSearch, showSearch} from "../actions/searchActions";

class Search extends Component {

    render() {
        return(
            <Fragment>
                <Header/>
                <div className="breadcrumbs">
                    <div className="container">
                        <ul className="breadcrumbs__list">
                            <li className="breadcrumbs__item">
                                <a href="index.html" className="breadcrumbs__link">
                                    Главная
                                </a>
                            </li>
                            <li className="breadcrumbs__item">
                                <span className="breadcrumbs__current">
                                    Поиск
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <section className="s-search">
                    <div className="container">
                        <h1 className="title-page">
                            Результаты поиска
                        </h1>
                        <div className="search-result">
                            <div className="search-result__header">
                                <div className="search-result__request">
                                    <span className="search-result__label">
                                        По запросу
                                    </span>
                                    <form className="search__form">
                                        <div className="search__input-wrapper">
                                            <input placeholder="Я хочу купить..." className="search__input" value={this.props.searchString} onChange={(e) => this.props.changeSearchString(e.target.value)}/>
                                            <div className="search__clear">
                                                <img src={clear} alt={""} className="search__clear-icon" onClick={(e) => this.props.changeSearchString('')}/>
                                            </div>
                                        </div>
                                        <input type="submit" value="Найти" className="search__btn"/>
                                    </form>
                                </div>
                                <span className="search-result__label">
                                    Найдено 30 товаров
                                </span>
                            </div>
                            <div className="search-result__body">
                                <div className="products-prev__wrapper">
                                    <Prev_1/>
                                    <Prev_2/>
                                    <Prev_1/>
                                    <Prev_2/>
                                    <Prev_1/>
                                    <Prev_2/>
                                    <Prev_1/>
                                    <Prev_2/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </Fragment>
        );
    }
}

Search.propTypes = {
    isHidden: PropTypes.bool.isRequired,
    searchString: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    isHidden: state.search.isHidden,
    searchString: state.search.searchString
});

export default connect(mapStateToProps, { showSearch, hideSearch, changeSearchString })(Search);
