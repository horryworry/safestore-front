import React, { Component } from 'react';

class Hits extends Component {
    render() {
        return(
            <section className="s-hits">
                <div className="container">
                    <h2 className="title-section">
                        Хиты продаж
                    </h2>
                    <div className="hits tabs">
                        <ul className="tabs-navigation hits-navigation">
                            <li className="hits-navigation__item tabs-navigation__item tabs-navigation__item--active">
                                Хиты продаж
                            </li>
                            <li className="hits-navigation__item tabs-navigation__item">
                                Выгодно
                            </li>
                            <li className="hits-navigation__item tabs-navigation__item">
                                Новинки
                            </li>
                        </ul>
                        <div className="tabs__body">
                            <div className="tab tab--active">
                                <p>
                                    1
                                </p>
                            </div>
                            <div className="tab">
                                <p>
                                    1
                                </p>
                            </div>
                            <div className="tab">
                                <p>
                                    1
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hits;