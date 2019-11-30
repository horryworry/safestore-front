import React, { Component } from 'react'
import guarantee from "../../static/images/general/guarantee.png"
import delivery from "../../static/images/general/delivery.png"
import pay from "../../static/images/general/wallet.png"

class Advantages extends Component {
    render() {
        return(
            <section className="s-advantages">
                <div className="container">
                    <div className="advantages">
                        <div className="advantage">
                            <img src={guarantee} className="advantage__icon"/>
                            <div className="advantage__body">
                                <span className="advantage__title">
                                    Гарантия
                                </span>
                                <span className="advantage__descr">
                                    качества всех товаров
                                </span>
                            </div>
                        </div>
                        <div className="advantage">
                            <img src={delivery} className="advantage__icon"/>
                            <div className="advantage__body">
                                <span className="advantage__title">
                                    Доставка
                                </span>
                                <span className="advantage__descr">
                                    по г.Бишкек и близлежащим регионам
                                </span>
                            </div>
                        </div>
                        <div className="advantage">
                            <img src={pay} className="advantage__icon"/>
                            <div className="advantage__body">
                                <span className="advantage__title">
                                    Оплата
                                </span>
                                <span className="advantage__descr">
                                    онлайн и наличными
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Advantages;
