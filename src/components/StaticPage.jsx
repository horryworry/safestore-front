import React, {Component, Fragment} from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Advantages from "./index/Advantages";
import certificate from "../static/images/general/certificate.jpg";

class StaticPage extends Component {

    render() {
        return(
            <Fragment>
                <Header/>
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
                                    О компании
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <section className="s-static-page">
                    <div className="container">
                        <h1 className="title-page">
                            О компании
                        </h1>
                        <div className="content-block">
                            <p className="text">
                                Интернет-магазин Safestore занимается продажей телефонов, планшетов, электронных часов от мировых производителей.
                                Компания работает на рынке уже более 15 лет. За это время мы составили уникальный ассортимент товаров на любой вкус и кошелек.
                                От классических телефонов и планшетов до оригинальных смарт часов и приобретающих все большую популярность виртуальных очков.
                            </p>
                            <p className="text">
                                Apple was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in April 1976 to
                                develop and sell Wozniak's Apple I personal computer, though Wayne sold his share
                                back within 12 days. It was incorporated as Apple Computer, Inc., in January 1977,
                                and sales of its computers, including the Apple II, grew quickly.
                            </p>
                            <h2 className="title-section">
                                Наш ассортимент
                            </h2>
                            <p className="text">
                                Apple is well known for its size and revenues. Its worldwide annual revenue totaled
                                $265 billion for the 2018 fiscal year. Apple
                                is the world's largest technology company by revenue and one of the world's most
                                valuable companies. It is also the world's third-largest mobile phone manufacturer
                                after Samsung and Huawei.
                            </p>
                            <div className="content-block__row">
                                <div className="content-block__col">
                                    <ul>
                                        <li>Apple</li>
                                        <li>LG</li>
                                        <li>Meizu</li>
                                        <li>Nokia</li>
                                        <li>Google</li>
                                        <li>Sony</li>
                                        <li>Motorola</li>
                                    </ul>
                                </div>
                                <div className="content-block__col">
                                    <ul>
                                        <li>Apple</li>
                                        <li>LG</li>
                                        <li>Meizu</li>
                                        <li>Nokia</li>
                                        <li>Google</li>
                                        <li>Sony</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text">
                                In August 2018, Apple became the first public U.S. company to be valued at over $1 trillion.
                                [11][12] The company employs 123,000 full-time employees[13] and maintains
                                504 retail stores in 24 countries as of 2018.[14] It operates the iTunes Store,
                                which is the world's largest music retailer.
                            </p>
                            <h4 className="title-small">
                                Причины выбрать Safestore.com:
                            </h4>
                            <ul>
                                <li>Apple Computer Company was founded on April 1, 1976, by Steve Jobs, Steve Wozniak, and Ronald Wayne as a business partnership.</li>
                                <li>Apple Computer, Inc. was incorporated on January 3, 1977,[32][33] without Wayne, who had left and sold his share of the company back to Jobs and Wozniak for $800 only twelve days after having co-founded Apple.</li>
                                <li>The Apple II, also invented by Wozniak, was introduced on April 16, 1977, at the first West Coast Computer Faire.</li>
                                <li>By the end of the 1970s, Apple had a staff of computer designers and a production line. The company introduced the Apple III in May 1980 in an attempt to compete with IBM in the business and corporate computing market.</li>
                                <li>Jobs and several Apple employees, including human–computer interface expert Jef Raskin, visited Xerox PARC in December 1979 to see a demonstration of the Xerox Alto.</li>
                                <li>Jobs was immediately convinced that all future computers would use a graphical user interface (GUI), and development of a GUI began for the Apple Lisa.</li>
                            </ul>
                            <h4 className="title-small">
                                Как с нами связаться?
                            </h4>
                            <p className="text">
                                As of January 2018, more than 1.3 billion Apple products are actively in use worldwide.
                                [15] The company also has a high level of brand loyalty and is ranked as
                                the world's most valuable brand. However, Apple receives significant criticism
                                regarding the labor practices of its contractors, its environmental practices
                            </p>
                            <p className="text">
                                Apple Computer Company was founded on April 1, 1976, by Steve Jobs, Steve Wozniak,
                                and Ronald Wayne as a business partnership.[16][19] The company's first product is
                                the Apple I, a computer designed and hand-built entirely by Wozniak
                            </p>
                            <div className="content-block__row">
                                <div className="content-block__col">
                                    <h4 className="title-small">
                                        Сертификаты
                                    </h4>
                                    <img src={certificate} alt="Сертификат" className="content-block__img"/>
                                </div>
                                <div className="content-block__col">
                                    <h4 className="title-small">
                                        Юридические данные
                                    </h4>
                                    <ul className="no-dots">
                                        <li>Юридические данные</li>
                                        <li>ООО "Спорт-Юнити</li>
                                        <li>ИНН: 873482</li>
                                        <li>ОГРН: 782346264</li>
                                        <li>Юридический адрес: Киргизия, г.Бишкек ул.Советская 61</li>
                                        <li>Sony</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Advantages/>
                <Footer/>
            </Fragment>
        );
    }

}

export default StaticPage;
