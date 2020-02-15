import React, { Component } from "react";
import search from "../../static/images/general/search.png";
import MainNav from "../main_nav/MainNav";
import clear from "../../static/images/general/close-button.png";

import ReactDOM from 'react-dom';

import {changeSearchString, hideSearch, showSearch} from "../../actions/searchActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class HeaderMenu extends Component {

    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);

        if (!domNode || !domNode.contains(event.target)) {
            this.props.hideSearch();
        }
    };

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    render() {

        return (
            <div className="header__menu">
                <div className="container">
                    <div className="header__content">
                        <MainNav/>
                        <div className={`header__search search ${this.props.isHidden ? "" : "search--open"}`}>
                            <img src={search} alt={""} className="search__icon" onClick={this.props.showSearch}/>
                            <div className="search__body">
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
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

HeaderMenu.propTypes = {
    isHidden: PropTypes.bool.isRequired,
    searchString: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    isHidden: state.search.isHidden,
    searchString: state.search.searchString
});

export default connect(mapStateToProps, { showSearch, hideSearch, changeSearchString })(HeaderMenu);

