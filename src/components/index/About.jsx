import React, { Component } from 'react'
import AboutTabs from "./AboutTabs/AboutTabs";

class About extends Component {
    render() {
        return(
            <section className="s-about">
                <div className="container">
                    <AboutTabs>
                        <div label="Интернет-магазин">
                            <div className="tab tab-shop">
                                <p className="text">
                                    У нас можно приобрести всю линейку продукций компании Apple по самым привлекательным ценам.
                                </p>
                            </div>
                        </div>
                        <div label="Наши преимущества">
                            <div className="tab tab-advantages">
                                <p className="text">
                                    1
                                </p>
                            </div>
                        </div>
                        <div label="Сервис">
                            <div className="tab tab-service">
                                <p className="text">
                                    2
                                </p>
                            </div>
                        </div>
                        <div label="Доставка">
                            <div className="tab tab-delivery">
                                <p className="text">
                                    3
                                </p>
                            </div>
                        </div>
                    </AboutTabs>

                </div>
            </section>

        );
    }
}

export default About;