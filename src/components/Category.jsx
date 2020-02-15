import React, {Component, Fragment} from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Slider from "./category/Slider";
import Prev_1 from "./products/Prev_1";
import Prev_2 from "./products/Prev_2";
import Content from "./category/Content";
import arrowPrev from "../static/images/general/arrow-left.png";
import arrowNext from "../static/images/general/arrowright.png";
import arrowDown from "../static/images/general/arrow-down.png";
import arrowRight from "../static/images/general/arrowright.png";
import arrowLeft from "../static/images/general/arrow-left.png";

import Filter from "./category/Filter";

import {openFilterMobile, closeFilterMobile, openSortBy, closeSortBy, changeTextSortBy, openShowBy, closeShowBy, changeTextShowBy} from "../actions/filterActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class Category extends Component {

    constructor(props) {
        super(props);
        this.sortByRef = null
        this.showByRef = null
    }

    paginationList = () => {
        let table = [];
        for (let i = 1; i <= 5; i++) {
            if (i == 1) {
                table.push(
                    <li className="pagination__item pagination__item--active" key={i}>
                        <a href="" className="pagination__link">{i}</a>
                    </li>
                )
            } else {
                table.push(
                    <li className="pagination__item" key={i}>
                        <a href="" className="pagination__link">{i}</a>
                    </li>
                )
            }
        }
        return table;
    };

    changeText = (e) => {
        this.props.changeTextSortBy(e.currentTarget.dataset.id)
        this.props.closeSortBy()
    };

    changeTextShowBy = (e) => {
        this.props.changeTextShowBy(e.currentTarget.dataset.id)
        this.props.closeShowBy()
    };

    render() {
        return(
            <Fragment>
                <Header />
                <div className="breadcrumbs">
                    <div className="container">
                        <ul className="breadcrumbs__list">
                            <li className="breadcrumbs__item">
                                <a href="index.html" className="breadcrumbs__link">
                                    Главная
                                </a>
                            </li>
                            <li className="breadcrumbs__item">
                                <a href="index.html" className="breadcrumbs__link">
                                    Каталог
                                </a>
                            </li>
                            <li className="breadcrumbs__item">
                                <span className="breadcrumbs__current">
                                    Айфоны
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <Slider/>
                <div className="category">
                    <div className="container">
                        <div className="category__header">
                            <h1 className="title-page">
                                iPhone
                            </h1>
                            <div className="filter-mobile__toggle" onClick={this.props.openFilterMobile}>
                                <span>
                                    Фильтры
                                </span>
                                <img src={arrowRight} alt="" className="filter-mobile__toggle-icon"/>
                            </div>
                            <div className="category__sort">
                                <div className={`select ${this.props.sortBy.isHidden ? '' : 'select--open'}`} ref={this.sortByRef}>
                                    <div className="select__header select__header--multi" onClick={this.props.sortBy.isHidden ? this.props.openSortBy : this.props.closeSortBy}>
                                        <span className="select__description">Сортировать по:</span>
                                        <span className="select__current">
                                            {this.props.sortBy.text}
                                        </span>
                                        <img src={arrowDown} className="select__icon"/>
                                        <div className="select__body">
                                            <ul className="select-list">
                                                <li className="select-list__item" onClick={this.changeText} data-id="цене">
                                                    цене
                                                </li>
                                                <li className="select-list__item"onClick={this.changeText} data-id="рейтингу">
                                                    рейтингу
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="category__body">
                            <aside className={`filter category__filter ${this.props.filterMobile.isHidden ? '' : 'filter--open'}`}>
                                <div className="filter-mobile__close" onClick={this.props.closeFilterMobile}>
                                    <img src={arrowLeft} alt="" className="filter-mobile__close-icon"/>
                                </div>
                                <Filter/>
                            </aside>
                            <main className="category-main">
                                <section className="s-category-main">
                                    <div className="products-prev__wrapper products-prev__wrapper--small">
                                        <Prev_1/>
                                        <Prev_2/>
                                        <Prev_1/>
                                        <Prev_2/>
                                        <Prev_1/>
                                        <Prev_2/>
                                        <Prev_1/>
                                        <Prev_2/>
                                    </div>
                                    <div className="pagination__wrapper">
                                        <div className="pagination">
                                            <a href="" className="pagination__btn">
                                                <img src={arrowPrev} className="pagination__icon"/>
                                            </a>
                                            <ul className="pagination__list">
                                                {this.paginationList()}
                                            </ul>
                                            <a href="" className="pagination__btn">
                                                <img src={arrowNext} className="pagination__icon"/>
                                            </a>
                                        </div>
                                        <div className="pagination__count">
                                            <span className="pagination__text">
                                                Выводить по:
                                            </span>
                                            <div className={`select ${this.props.showBy.isHidden ? '' : 'select--open'}`} ref={this.showByRef}>
                                                <div className="select__header" onClick={this.props.showBy.isHidden ? this.props.openShowBy : this.props.closeShowBy}>
                                                    <span className="select__current">
                                                        {this.props.showBy.text}
                                                    </span>
                                                    <img src={arrowDown} className="select__icon"/>
                                                </div>
                                                <div className="select__body">
                                                    <ul className="select-list">
                                                        <li className="select-list__item" onClick={this.changeTextShowBy} data-id="24">24</li>
                                                        <li className="select-list__item" onClick={this.changeTextShowBy} data-id="36">36</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <Content/>
                            </main>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Fragment>

        );
    }
}

Category.propTypes = {
    filterMobile: {
        isHidden: PropTypes.bool.isRequired
    },
    sortBy: {
        isHidden: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    },
    showBy: {
        isHidden: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }
};

const mapStateToProps = state => ({
    filterMobile: {
        isHidden: state.filter.filterMobile.isHidden,
    },
    sortBy: {
        isHidden: state.filter.sortBy.isHidden,
        text: state.filter.sortBy.text
    },
    showBy: {
        isHidden: state.filter.showBy.isHidden,
        text: state.filter.showBy.text
    }
});

export default connect(mapStateToProps, { openFilterMobile, closeFilterMobile, openSortBy, closeSortBy, changeTextSortBy, openShowBy, closeShowBy, changeTextShowBy })(Category);