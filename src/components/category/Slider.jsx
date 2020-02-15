import React, {Component, Fragment} from "react";
import discount from "../../static/images/general/discountCategory.png";
import truck from "../../static/images/general/truck.png";
import label from "../../static/images/general/label.png";
import support from "../../static/images/general/support.png";
import consulting from "../../static/images/general/consulting.png";
import map from "../../static/images/general/map.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "react-slick";

class Slider extends Component {

    getSlides = (link, text) => {
        return(
            <div className="category-slider__item">
                <img src={link} alt="" className="category-slider__icon"/>
                <span className="category-slider__text">
                    {text}
                </span>
            </div>
        );
    };

    render() {
        const settings = {
            slidesToShow: 6,
            dots: true,
            customPaging: function(i) {
                return(
                    <div className="category-slider__dot"></div>
                );
            },
            infinite: false,
            speed: 500,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1140,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        };
        return(
            <section className="s-category-slider">
                <div className="container">
                    <div className="category-slider">
                        <div className="category-slider__header">
                            <div className="category-slider__title">
                                Официальные дилеры Apple, Samsung, Xiaomi, LG
                            </div>
                        </div>
                        <div className="category-slider__body">
                            <Slider1 ref={c => (this.slider = c)} {...settings} class="js-category-slider">
                                {this.getSlides(discount, 'Найдете дешевле - мы сделаем скидку')}
                                {this.getSlides(truck, 'Доставка по Бишкеку день в день, на следующий день, через день')}
                                {this.getSlides(label, 'Расширенная европейская гарантия от производителя')}
                                {this.getSlides(support, 'Официальный сервисный центр')}
                                {this.getSlides(consulting, 'Профессиональная консультация от продавцов')}
                                {this.getSlides(map, 'Доставка по всему Кыргызстану')}
                            </Slider1>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Slider;