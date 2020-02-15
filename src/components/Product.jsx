import React, {Component, Fragment} from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Advantages from "./index/Advantages";
import Content from "./category/Content";
import Goods from "./product/Goods";

import ProductSlider from "./product/ProductSlider";

import {changeActiveProductColor} from "../actions/colorActions";
import {changeContainerWidth} from "../actions/ProductActions";

import PropTypes from "prop-types";
import {connect} from "react-redux";

import Info from "./product/Info";

import ProductTabs from "./product/ProductTabs/ProductTabs";

import Tab1 from "./product/ProductTabs/Tabs/Tab1";
import Tab2 from "./product/ProductTabs/Tabs/Tab2";
import Tab3 from "./product/ProductTabs/Tabs/Tab3";
import wallet from "../static/images/general/wallet.png";
import truck from "../static/images/general/truck.png";
import map from "../static/images/general/map.png";
import apple from "../static/images/content/brands/appleBrand.png";

class Product extends Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.containerRef = React.createRef()
    }

    scrollToMyRef = () => {
        this.myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    componentDidMount() {
        this.props.changeContainerWidth(this.containerRef.current.offsetWidth - 30)
        window.addEventListener('resize', this.changeWindowListener);
    }

    changeWindowListener = () => {
        this.props.changeContainerWidth(this.containerRef.current.offsetWidth - 30)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.changeWindowListener);
    }

    getProductList = () => {
        let table = []
        let products = ['Наличные', 'Электронные деньги', 'Сбербанк', 'Безналичная оплата']
        for (let i = 0; i < products.length; i++) {
            table.push(
                <li className="product-list__item" key={i}>
                    {products[i]}
                </li>
            )
        }
        return table
    };

    render() {
        return(
            <Fragment>
                <Header />
                <div className="breadcrumbs">
                    <div className="container" ref={this.containerRef}>
                        <ul className="breadcrumbs__list">
                            <li className="breadcrumbs__item">
                                <a href="index.html" className="breadcrumbs__link" ref={this.myRef}>
                                    Главная
                                </a>
                            </li>
                            <li className="breadcrumbs__item">
                                <a href="index.html" className="breadcrumbs__link">
                                    Каталог
                                </a>
                            </li>
                            <li className="breadcrumbs__item">
                                <a href="index.html" className="breadcrumbs__link">
                                    Айфоны
                                </a>
                            </li>
                            <li className="breadcrumbs__item">
                                <a href="index.html" className="breadcrumbs__link">
                                    Черные айфоны
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
                <section className="s-product">
                    <div className="container">
                        <div className="product">
                            <div className="product__header">
                                <div className="product-info__header" style={{display: `${this.props.screenWidth < 1140 ? "" : "none"}`}}>
                                    <h1 className="title-page">
                                        iPhone XS
                                    </h1>
                                    <img src={apple} alt={"Логотип бренда"} className="product-info__logo"></img>
                                </div>
                                <ProductSlider/>
                                <Info/>
                                <div className="product-info__footer" style={{display: `${this.props.screenWidth < 1140 ? "" : "none"}`}}>
                                    <div className="product-info-advantages">
                                        <div className="product-info-advantage">
                                            <div className="product-info-advantage__header">
                                                <img src={wallet} alt="" className="product-info-advantage__icon"/>
                                                <span className="product-info-advantage__title">
                                                    Оплата
                                                </span>
                                            </div>
                                            <div className="product-info-advantage__body">
                                                <ul className="product-list product-list--advantage">
                                                    {this.getProductList()}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-info-advantage">
                                            <div className="product-info-advantage__header">
                                                <img src={truck} alt="" className="product-info-advantage__icon"/>
                                                <span className="product-info-advantage__title">
                                                    Доставка
                                                </span>
                                            </div>
                                            <div className="product-info-advantage__body">
                                                <p className="product__text">По Бишкеку сегодня курьером - <b>бесплатно</b></p>
                                                <p className="product__text">Самовывоз с нашего магазина - <b>бесплатно</b></p>
                                            </div>
                                        </div>
                                        <div className="product-info-advantage">
                                            <div className="product-info-advantage__header">
                                                <img src={map} alt="" className="product-info-advantage__icon"/>
                                                <span className="product-info-advantage__title">
                                                    Самовывоз
                                                </span>
                                            </div>
                                            <div className="product-info-advantage__body">
                                                <p className="product__text">г.Бишкек, улица Советская, дом 61, павильон 1/2</p>
                                                <a href="" className="product-info__link">Яндекс карты</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product__body">
                                <ProductTabs scrollToMyRef={this.scrollToMyRef} containerWidth={this.props.containerWidth}>
                                    <div label="Описание">
                                        <div className={`tab tab-description ${this.props.descriptionTabActive ? 'tab--active' : ''}`}>
                                            <Tab1/>
                                        </div>
                                    </div>
                                    <div label="Характеристики">
                                        <div className={`tab tab-characteristics ${this.props.characteristicsTabActive ? 'tab--active' : ''}`}>
                                            <Tab2/>
                                        </div>
                                    </div>
                                    <div label="Отзывы: 3">
                                        <div className={`tab tab-reviews ${this.props.reviewTabActive ? 'tab--active' : ''}`}>
                                            <Tab3/>
                                        </div>
                                    </div>
                                    <div label="Похожие товары">
                                        <div className={`tab tab-delivery ${this.props.deliveryTabActive ? 'tab--active' : ''}`}>
                                            4
                                        </div>
                                    </div>
                                </ProductTabs>
                            </div>
                        </div>
                    </div>
                </section>
                <Advantages/>
                <Goods myRef={this.myRef}/>
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

Product.propTypes = {
    activeColor: PropTypes.string.isRequired,
    descriptionTabActive: PropTypes.bool.isRequired,
    characteristicsTabActive: PropTypes.bool.isRequired,
    reviewTabActive: PropTypes.bool.isRequired,
    deliveryTabActive: PropTypes.bool.isRequired,
    containerWidth: PropTypes.number.isRequired,
    screenWidth: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    activeColor: state.color.product.text,
    descriptionTabActive: state.productTab.descriptionTabIsActive,
    characteristicsTabActive: state.productTab.characteristicsTabIsActive,
    reviewTabActive: state.productTab.reviewTabIsActive,
    deliveryTabActive: state.productTab.deliveryTabIsActive,
    containerWidth: state.productTabNavigation.containerWidth,
    screenWidth: state.mobileMenu.screenWidth
});

export default connect(mapStateToProps, { changeActiveProductColor, changeContainerWidth })(Product);