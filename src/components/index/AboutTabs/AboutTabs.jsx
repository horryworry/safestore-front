import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AboutTab from './AboutTab';

class AboutTabs extends Component {

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
                        О нас
                    </h2>
                    <div className="about tabs">

                        <div className="tabs__body about__body">

                            {children.map((child) => {
                                if (child.props.label !== activeTab) return undefined;
                                return child.props.children;
                            })}

                        </div>

                        <div className="mobile-scroll-wrapper">
                            <div className="mobile-scroll-inner">
                                <ul className="tabs-navigation about-navigation">

                                    {children.map((child) => {
                                        const { label } = child.props;

                                        return (
                                            <AboutTab
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

                    </div>
                </div>
            </section>

        );
    }
}

export default AboutTabs;