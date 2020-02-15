import React, {Fragment, Component} from "react";
import arrowDown from "../../static/images/general/arrow-down.png";

import PropTypes from "prop-types";
import {connect} from "react-redux";

import {openFilterSelect, closeFilterSelect, changeTextFilterSelect} from "../../actions/filterActions";
import {changeActiveFilterColor} from "../../actions/colorActions";

import ReactDOM from "react-dom";

class Filter extends Component {

    getFilterLinks = () => {
        let data = ['iphone SE', 'iphone X', 'iphone XS', 'iphone 6','iphone 7', 'iphone 8']
        let table = []
        for(let i = 0; i < data.length; i++) {
            table.push(
                <li className="filter-list__item" key={i}>
                    <a href="" className="filter-list__link">
                        {data[i]}
                    </a>
                </li>
            )
        }
        return table
    };

    getColors = () => {
        let table = []
        let colors = ['000000', '666666', 'ffffff', '84d6ff', '3333ff', '666666', 'ff0500', 'ff6500', '663300', 'ffd701', '009900', '99ff9a', '30d5c8', '103090']
        for (let i = 0; i < colors.length; i++) {
            if (colors[i] == 'ffffff') {
                table.push(
                    <li className={`color-list__item color-list__item--white ${this.props.activeColor == colors[i] ? 'color-list__item--active' : ''}`} key={i} style={{backgroundColor: `#${colors[i]}`}} onClick={(e) => this.props.changeActiveFilterColor(colors[i])}>
                    </li>
                )
            } else {
                table.push(
                    <li className={`color-list__item ${this.props.activeColor == colors[i] ? 'color-list__item--active' : ''}`} key={i} style={{backgroundColor: `#${colors[i]}`}} onClick={(e) => this.props.changeActiveFilterColor(colors[i])}>
                    </li>
                )
            }
        }
        return table
    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.closeFilterSelect()
        }
    }

    changeText = (e) => {
        this.props.changeTextFilterSelect(e.currentTarget.dataset.id)
        this.props.closeFilterSelect()
    };

    render() {
        return(
            <Fragment>
                <div className="filter__body">
                    <div className="filter__block">
                    <span className="filter__title">
                        Подкатегории
                    </span>
                        <ul className="filter-list">
                            {this.getFilterLinks()}
                        </ul>
                    </div>
                    <div className="filter__block">
                    <span className="filter__title">
                        Подбор параметров
                    </span>
                        <div className="filter__row">
                            <div className={`select ${this.props.isHidden ? '' : 'select--open'}`} ref={this.setWrapperRef}>
                                <div className="select__header" onClick={this.props.isHidden ? this.props.openFilterSelect : this.props.closeFilterSelect}>
                                <span className="select__current">
                                    {this.props.text}
                                </span>
                                    <img src={arrowDown} className="select__icon"/>
                                </div>
                                <div className="select__body">
                                    <ul className="select-list">
                                        <li className="select-list__item" onClick={this.changeText} data-id="Мужской">Мужской</li>
                                        <li className="select-list__item" onClick={this.changeText} data-id="Женский">Женский</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="filter__row">
                            <div className="filter-color">
                                <span className="filter__label">
                                    Цвет
                                </span>
                                <ul className="color-list">
                                    {this.getColors()}
                                </ul>
                            </div>
                        </div>
                        <div className="filter__buttons">
                            <button className="btn btn--contour-gray">
                                Сброс
                            </button>
                            <button className="btn btn--bg-orange">
                                Подбор
                            </button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

}

Filter.propTypes = {
    isHidden: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    activeColor: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    isHidden: state.filter.isHidden,
    text: state.filter.text,
    activeColor: state.color.filter.text
});

export default connect(mapStateToProps, { openFilterSelect, closeFilterSelect, changeTextFilterSelect, changeActiveFilterColor })(Filter);
