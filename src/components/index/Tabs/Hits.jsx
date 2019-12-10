import React, { Component } from 'react';
import Prev_1 from "../../products/Prev_1";
import Prev_2 from "../../products/Prev_2";
import Slider from "react-slick";
import arrowPrev from "../../../static/images/general/arrow-left.png";
import arrowNext from "../../../static/images/general/arrowright.png";

class Hits extends Component {
    render() {
        const settings = {
            customPaging : function(slider, i) {
                return(
                    <div class=""></div>
                );
            },
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1139,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: true,
                        appendDots: '.products-line-slider__dots',
                        customPaging : function(i) {
                            return(
                                <div className="products-line-slider__dot"></div>
                            );
                        },
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return(
            <div className="products-line-slider">
                <Slider ref={c => (this.slider = c)} {...settings} class="js-products-line-slider">
                    <Prev_1/>
                    <Prev_2/>
                    <Prev_1/>
                    <Prev_2/>
                </Slider>
                <div className="products-line-slider__navigation">
                    <div className="products-line-slider__btn products-line-slider__btn--prev">
                        <img src={arrowPrev} alt="" className="products-line-slider__icon"/>

                    </div>
                    <div className="products-line-slider__dots">

                    </div>
                    <div className="products-line-slider__btn products-line-slider__btn--next">
                        <img src={arrowNext} alt="" className="products-line-slider__icon"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hits;