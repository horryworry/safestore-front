import React, {Component, Fragment} from "react";

import arrowUp from "../../static/images/general/arrowup.png";
import iphone1 from "../../static/images/general/iphonexs1.jpeg";
import arrowDown from "../../static/images/general/arrow-down.png";

import Slider from "react-slick";

class ProductSlider extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    next() {
        this.slider1.slickNext();
    }

    previous() {
        this.slider1.slickPrev();
    }

    render() {
        const dotsSettings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: true,
            focusOnSelect: true,
            vertical: true,
            infinite: false,
            speed: 500,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 1139,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            speed: 500,
            dots: false,
            responsive: [
                {
                    breakpoint: 1139,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };
        return(
            <div className="product-slider">
                <div className="product-slider-dots">
                    <div className="product-slider-dots__btn product-slider-dots__btn--prev" onClick={this.previous}>
                        <img src={arrowUp} className="product-slider-dots__btn-icon"/>
                    </div>
                    <Slider asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)} {...dotsSettings} className="js-product-slider-dots">
                        <div className="product-slider-dots__item">
                            <img src={iphone1} alt="" className="product-slider-dots__img"/>
                        </div>
                        <div className="product-slider-dots__item">
                            <img src={iphone1} alt="" className="product-slider-dots__img"/>
                        </div>
                        <div className="product-slider-dots__item">
                            <img src={iphone1} alt="" className="product-slider-dots__img"/>
                        </div>
                    </Slider>
                    <div className="product-slider-dots__btn product-slider-dots__btn--next" onClick={this.next.bind(this)}>
                        <img src={arrowDown} className="product-slider-dots__btn-icon"/>
                    </div>
                </div>
                <Slider asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} {...settings} className="js-product-slider">
                    <div className="product-slider__img-wrapper">
                        <img src={iphone1} alt="" className="product-slider__img"/>
                    </div>
                    <div className="product-slider__img-wrapper">
                        <img src={iphone1} alt="" className="product-slider__img"/>
                    </div>
                    <div className="product-slider__img-wrapper">
                        <img src={iphone1} alt="" className="product-slider__img"/>
                    </div>
                </Slider>

            </div>
        );
    }
}

export default ProductSlider;