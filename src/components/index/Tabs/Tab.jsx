import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {

    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    };

    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this;

        let className = 'hits-navigation__item tabs-navigation__item';

        if (activeTab === label) {
            className = 'hits-navigation__item tabs-navigation__item tabs-navigation__item--active';
        }

        return (
            <li className={className} onClick={onClick} >
                {label}
            </li>
        );
    }
}

export default Tab;