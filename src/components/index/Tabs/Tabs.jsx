import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

class Tabs extends Component {

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
        this.setState({ activeTab: tab });
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

            <section className="s-hits">
                <div className="container">
                    <h2 className="title-section">
                        Хиты продаж
                    </h2>
                    <div className="hits tabs">
                        <ul className="tabs-navigation hits-navigation">

                            {children.map((child) => {
                                const { label } = child.props;

                                return (
                                    <Tab
                                        activeTab={activeTab}
                                        key={label}
                                        label={label}
                                        onClick={onClickTabItem}
                                    />
                                );
                            })}

                        </ul>
                        <div className="tabs__body hits__body">

                            {children.map((child) => {
                                if (child.props.label !== activeTab) return undefined;
                                return child.props.children;
                            })}

                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Tabs;