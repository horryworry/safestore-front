import React, { Component } from 'react';
import Prev1 from "../../products/Prev_1";
import Prev2 from "../../products/Prev_2";
import Slider from "react-slick";
import arrowPrev from "../../../static/images/general/arrow-left.png";
import arrowNext from "../../../static/images/general/arrowright.png";

class New extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            customPaging : function(i) {
                return(
                    <div className="products-line-slider__dot"></div>
                );
            },
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
            <div className="products-line-slider">
                <Slider ref={c => (this.slider = c)} {...settings} class="js-products-line-slider">
                    <Prev1/>
                    <Prev2/>
                    <Prev1/>
                    <Prev2/>
                </Slider>
                <div className="products-line-slider__navigation">
                    <div className="products-line-slider__btn products-line-slider__btn--prev" onClick={this.previous}>
                        <img src={arrowPrev} alt="" className="products-line-slider__icon"/>
                    </div>
                    <div className="products-line-slider__btn products-line-slider__btn--next" onClick={this.next}>
                        <img src={arrowNext} alt="" className="products-line-slider__icon"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default New;