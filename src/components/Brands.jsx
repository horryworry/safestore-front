import React, {Component, Fragment} from "react";
import apple from "../static/images/content/brands/appleBrand.png";
import Header from "./header/Header";
import Footer from "./footer/Footer";

class Brands extends Component {

    returnMultipleItems = () => {
        let table = [];
        for (let i = 0; i < 6; i++) {
            table.push(
                <li className="brands__item" key={i}>
                    <a href="brand.html" className="brand">
                        <img src={apple} alt={"Логотип бренда"} className="brand__img"></img>
                        <span className="brand__name">
                            Apple
                        </span>
                    </a>
                </li>
            )
        }
        return table;
    };

    render() {
        return(
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
                                <span className="breadcrumbs__current">
                                    Бренды
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <section className="s-brands">
                    <div className="container">
                        <div className="brands">
                            <h1 className="title-page">
                                Бренды
                            </h1>
                            <ul className="brands__list">
                                {this.returnMultipleItems()}
                                {this.returnMultipleItems()}
                                {this.returnMultipleItems()}
                                {this.returnMultipleItems()}
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="s-content">
                    <div className="container">
                        <div className="content-block">
                            <h3 className="title-block">
                                Сео текст по брендам
                            </h3>
                            <p className="text">
                                Купить макбук можно в нашем интернет-магазине. Это обойдется недорого.
                                В ассортименте есть большое колличество моделей и множество разных видов.
                                Все товары соответствуют европейским стандартам безопасности.
                            </p>
                            <p className="text">
                                Интернет-магазин "Safestore" обслуживает покупателей из всех регионов Киргизии.
                                Можно покупать товар партиями или поштучно. Доставка осуществляется в кратчайшие сроки
                                независимо от количества приобретаемого товара. В случае необходимости магазин оказывает бесплатные консультации.
                            </p>
                        </div>
                    </div>
                </section>
                <Footer/>
            </Fragment>
        );
    }
}

export default Brands;