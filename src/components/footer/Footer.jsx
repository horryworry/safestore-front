import React, { Component } from 'react'
import facebook from "../../static/images/general/socials/facebook.png";
import instagram from "../../static/images/general/socials/instagram.jpg";
import vk from "../../static/images/general/socials/vkontakte.jpg";
import twitter from "../../static/images/general/socials/twitter.jpg";
import yandex from "../../static/images/general/socials/yandex.png";

class Footer extends Component {

    footerNavLink = (link, text) => {
        return(
            <li className="footer-nav__item">
                <a href={link} className="footer-nav__link">
                    {text}
                </a>
            </li>
        );
    };

    render() {
        return(
            <footer className="footer">
                <div className="footer__main">
                    <div className="container">
                        <div className="footer__navigation">
                            <div className="footer__item">
                                <ul className="footer-nav">
                                    {this.footerNavLink('', 'iPhone')}
                                    {this.footerNavLink('', 'Macbook')}
                                    {this.footerNavLink('', 'Macbook Mini')}
                                    {this.footerNavLink('', 'Apple Watch')}
                                    {this.footerNavLink('', 'iPad')}
                                    {this.footerNavLink('', 'Apple TV')}
                                </ul>
                            </div>
                            <div className="footer__item">
                                <ul className="footer-nav">
                                    {this.footerNavLink('', 'О компании')}
                                    {this.footerNavLink('', 'Доставка')}
                                    {this.footerNavLink('', 'Оплата')}
                                    {this.footerNavLink('', 'Поставщикам')}
                                    {this.footerNavLink('', 'Новости')}
                                    {this.footerNavLink('', 'Отзывы')}
                                </ul>
                            </div>
                            <div className="footer__item">
                                <ul className="footer-nav">
                                    {this.footerNavLink('', 'Контакты')}
                                    {this.footerNavLink('', 'Вопросы и ответы')}
                                    {this.footerNavLink('', 'Карта сайта')}
                                </ul>
                                <span className="footer_address">
                                Киргизия, г. Бишкек, ул. Советская 61-34, павильон №1/1
                            </span>
                            </div>
                        </div>
                        <div className="footer__contacts">
                            <div className="footer__phones">
                                <a href="tel:+996700391252" className="footer__phone">
                                    +996 (700) 39-12-52
                                </a>
                                <span className="footer__text">
                                    Звонок бесплатный
                                </span>
                                <span className="footer__text">
                                    + 996 (700) 39-12-52
                                </span>
                            </div>
                            <a href="mailto:horryworry@gmail.com" className="footer__mail">
                                horryworry@gmail.com
                            </a>
                        </div>
                        <div className="footer__contacts-mobile">
                            <div className="footer__item">
                                <a href="tel:+996700391252" className="footer__phone">
                                    +996 (700) 39-12-52
                                </a>
                                <span className="footer__text">
                                    Звонок бесплатный
                                </span>
                            </div>
                            <div className="footer__item">
                                <span className="footer__text">
                                    + 996 (700) 39-12-52
                                </span>
                                <a href="mailto:horryworry@gmail.com" className="footer__mail">
                                    horryworry@gmail.com
                                </a>
                            </div>
                            <div className="footer__item">
                                <div className="yandex-market">
                                    <img src={yandex} alt="иконка Яндекс" className="yandex-market__icon"/>
                                    <a href="" className="btn btn--small btn--transparent-gray btn--inline">
                                        Оставить
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__socials">
                    <div className="container">
                        <ul className="socials">
                            <li className="socials__item">
                                <a href="" className="socials__link">
                                    <img src={instagram} className="socials__icon" alt="иконка Instagram"/>
                                    <span className="socials__name">
                                        Instagram
                                    </span>
                                </a>
                            </li>
                            <li className="socials__item">
                                <a href="" className="socials__link">
                                    <img src={facebook} className="socials__icon" alt="иконка Facebook"/>
                                    <span className="socials__name">
                                        Facebook
                                    </span>
                                </a>
                            </li>
                            <li className="socials__item">
                                <a href="" className="socials__link">
                                    <img src={twitter} className="socials__icon" alt="иконка Twitter"/>
                                    <span className="socials__name">
                                        Twitter
                                    </span>
                                </a>
                            </li>
                            <li className="socials__item">
                                <a href="" className="socials__link">
                                    <img src={vk} className="socials__icon" alt="иконка Вконтакте"/>
                                    <span className="socials__name">
                                        Вконтакте
                                    </span>
                                </a>
                            </li>
                        </ul>

                        <div className="yandex-market">
                            <img src={yandex} alt="иконка Яндекс" className="yandex-market__icon"/>
                            <a href="" className="btn btn--small btn--transparent-gray btn--inline">
                                Оставить
                            </a>
                        </div>

                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="container">
                        <span className="copyrite">
                            © 2010-2020 "Safestore". Все права защищены. Информация сайта защищена законом об авторских правах.
                        </span>
                        <a href="" className="footer__personal-data">Политика обработки персональных данных</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;