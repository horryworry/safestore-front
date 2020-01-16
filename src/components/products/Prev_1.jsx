import React, { Component } from 'react';
import macbook from "../../static/images/content/products/macbook.jpg";
import Slider from "react-slick";

class Prev_1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            colors: ['#ff5ec9', '#7ed321', '#f5a623']
        };
    }

    render() {
        const {
            state: {
                colors
            }
        } = this;
        const settings = {
            customPaging : function(i) {
                return(
                    <div className="product-prev__color-container">
                        <a href={"/#"} className="product-prev__color" style={{backgroundColor: colors[i]}}></a>
                    </div>

                );
            },
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            swipe: false
        };
        return(
            <div className="product-prev">
                <div className="product-prev__header">
                    <Slider ref={c => (this.slider = c)} {...settings} class="js-product-prev__slider">
                        <div className="product-prev__img-wrapper">
                            <img src={macbook} alt="Изображение товара" className="product-prev__img"/>
                        </div>
                        <div className="product-prev__img-wrapper">
                            <img src={macbook} alt="Изображение товара" className="product-prev__img"/>
                        </div>
                        <div className="product-prev__img-wrapper">
                            <img src={macbook} alt="Изображение товара" className="product-prev__img"/>
                        </div>
                    </Slider>
                </div>
                <div className="product-prev__body">
                    <div className="product-prev__info">
                        <span className="product-prev__title">
                            MacBook Pro 13 дюймов Touch Bar (MUHR2) 256 ГБ
                        </span>
                        <span className="product-prev__country">
                            Калифорния
                        </span>
                    </div>
                    <div className="product-prev__price">
                        <span className="product-prev__price-current">
                            1590 $
                        </span>
                        <span className="product-prev__price-old">
                            1590 $
                        </span>
                    </div>
                    <div className="product-prev__colors">

                    </div>
                </div>
                <div className="product-prev__footer">
                    <button className="btn">В корзину</button>
                </div>
            </div>
        );
    }
}

export default Prev_1;