import React, {Component, Fragment} from "react";
import arrowPrev from "../../static/images/general/arrow-left.png";
import arrowNext from "../../static/images/general/arrowright.png";
import Slider from "react-slick";
import Prev1 from "../products/Prev_1";
import Prev2 from "../products/Prev_2";

class Goods extends Component {
    render() {
        const settings = {
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
            <section className="s-slider">
                <div className="container">
                    <div className="products-border-line-slider">
                        <div className="products-border-line-slider__header">
                            <h2 className="title-section" ref={this.props.myRef}>
                                Похожие товары
                            </h2>
                            <div className="products-border-line-slider__navigation">
                                <div className="products-border-line-slider__btn products-border-line-slider__btn--prev" onClick={this.previous}>
                                    <img src={arrowPrev} alt="" className="products-border-line-slider__icon"/>
                                </div>
                                <div className="products-border-line-slider__btn products-border-line-slider__btn--next" onClick={this.next}>
                                    <img src={arrowNext} alt="" className="products-border-line-slider__icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="products-border-line-slider__body">
                            <Slider ref={c => (this.slider = c)} {...settings} class="js-products-border-line-slider">
                                <Prev1/>
                                <Prev2/>
                                <Prev1/>
                                <Prev2/>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Goods;