import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductTab extends Component {

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

        let className = 'product-details-navigation__item tabs-navigation__item';

        if (activeTab === label) {
            className = 'product-details-navigation__item tabs-navigation__item tabs-navigation__item--active';
        }

        return (
            <li className={className} onClick={onClick} >
                {label}
            </li>
        );
    }
}

export default ProductTab;