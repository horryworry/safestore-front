import React, {Component, Fragment} from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Info from "./index/Brand/Info";
import Content from "./index/Brand/Content";
import Slider1 from "./index/Brand/Slider1";
import Slider2 from "./index/Brand/Slider2";

class Brand extends Component {
    render() {
        return (
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
                                <a href="brands.html" className="breadcrumbs__link">
                                    Бренды
                                </a>
                            </li>
                            <li className="breadcrumbs__item">
                                <span className="breadcrumbs__current">
                                    iPhone XS
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <section className="s-brand s-border-bottom">
                    <div className="container">
                        <h1 className="title-page">
                            iPhone XS
                        </h1>
                        <Info/>
                    </div>
                </section>
                <section className="s-slider s-border-bottom">
                    <div className="container">
                        <Slider1/>
                    </div>
                </section>
                <section className="s-slider">
                    <div className="container">
                        <Slider2/>
                    </div>
                </section>
                <section className="s-content">
                    <div className="container">
                        <Content/>
                    </div>
                </section>
                <Footer/>
            </Fragment>
        );
    }
}

export default Brand;