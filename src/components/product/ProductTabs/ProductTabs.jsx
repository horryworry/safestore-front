import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductTab from './ProductTab';
import {connect} from "react-redux";

import {descriptionTabIsActive, characteristicsTabIsActive, reviewTabIsActive, deliveryTabIsActive} from "../../../actions/ProductTabActions";

class ProductTabs extends Component {

    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label,
        };

    }

    onClickTabItem = (tab) => {

        if (tab == "Похожие товары") {
            const { scrollToMyRef } = this.props;
            scrollToMyRef();
            return;
        }

        this.setState({ activeTab: tab });

        if (tab=="Описание") {
            this.props.descriptionTabIsActive()
        } else if (tab=="Характеристики") {
            this.props.characteristicsTabIsActive()
        } else if (tab == "Отзывы: 3") {
            this.props.reviewTabIsActive()
        } else if (tab== "Похожие товары"){
            this.props.deliveryTabIsActive()
        }

    };

    render() {
        const {
            onClickTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return (
            <div className="product-details tabs">
                <div className="mobile-scroll-wrapper">
                    <div className="mobile-scroll-inner">
                        <ul className="tabs-navigation product-details-navigation" style={{minWidth: this.props.containerWidth}}>
                            {children.map((child) => {
                                const { label } = child.props;
                                return (
                                    <ProductTab
                                        activeTab={activeTab}
                                        key={label}
                                        label={label}
                                        onClick={onClickTabItem}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div className="tabs__body product-details__body">
                    {
                        children.map((child) => {
                            if (child.props.label !== activeTab) return undefined;
                            return child.props.children;
                    })}
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { descriptionTabIsActive, characteristicsTabIsActive, reviewTabIsActive, deliveryTabIsActive })(ProductTabs);