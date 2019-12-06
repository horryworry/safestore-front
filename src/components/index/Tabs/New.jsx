import React, { Component } from 'react';
import Prev_1 from "../../products/Prev_1";
import Prev_2 from "../../products/Prev_2";
import Slider from "react-slick";

class New extends Component {
    render() {
        const settings = {
            customPaging : function(slider, i) {
                return(
                    <a class=""></a>
                );
            },
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
        };
        return(
            <div className="products-line-slider">
                <Slider ref={c => (this.slider = c)} {...settings} class="js-products-line-slider">
                    <Prev_1/>
                    <Prev_2/>
                    <Prev_1/>
                    <Prev_2/>
                </Slider>
            </div>
        );
    }
}

export default New;