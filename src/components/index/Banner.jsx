import React, { Component } from 'react';
import Slider from "react-slick";
import left from "../../static/images/general/arrow-left.png";
import right from "../../static/images/general/arrowright.png";
import iphone from "../../static/images/content/banner/iphone.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apple from "../../static/images/content/brands/appleBrand.png";

class Banner extends Component {

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

    showBanners = () => {
        let banners = [];
        for (let i = 0; i < 4; i++) {
            banners.push(
                <div className="banner__item">
                    <div className="banner__content">
                        <div className="banner__img-wrapper">
                            <img src={iphone} alt="Картинка на баннере" className="banner__img"></img>
                        </div>
                        <div className="banner__body">
                                    <span className="banner__title">
                                        iPhone
                                    </span>
                            <span className="banner__descr">
                                        Подарок который оценит каждый
                                    </span>
                            <a href="/#" className="btn btn--transparent-white btn--round btn--inline">Выбрать</a>
                        </div>
                    </div>
                </div>
            )
        }
        return banners;
    };

    render() {
        const settings = {
            customPaging : function(i) {
                return(
                    <div className="banner__dot"></div>
                );
            },
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        };
        return(
            <section className="s-banner">
                <div className="container">
                    <div className="banner">
                        <div className="banner__navigation banner__navigation--prev" onClick={this.previous}>
                            <img src={left} alt={""} className="banner__navigation-icon"/>
                        </div>
                        <div className="banner__navigation banner__navigation--next" onClick={this.next}>
                            <img src={right} alt={""} className="banner__navigation-icon"/>
                        </div>
                        <Slider ref={c => (this.slider = c)} {...settings} class="js-banner">
                            {this.showBanners()}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;
