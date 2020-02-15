import React, { Fragment, Component } from 'react';

class Tab1 extends Component {

    getProductList = () => {
        let table = []
        let products = [
            'iPhone Xs and iPhone Xs Max will be available in 64GB, 256GB and 512GB capacity models in space gray, silver and a new gold finish starting at $999 (US) and $1,099, respectively, from apple.com, in the Apple Store app and Apple Stores, and is also available through Apple Authorized Resellers and select carriers (prices may vary).',
            'Through Apple’s iPhone Upgrade Program, customers in the US can get iPhone Xs and iPhone Xs Max with the protection of AppleCare+, choose their carrier (no multiyear service contract required) and have the opportunity to upgrade to a new iPhone every year. The iPhone Upgrade Program is available for iPhone Xs and iPhone Xs Max at apple.com and Apple Stores in the US with monthly payments starting at $49.91 and $54.08, respectively. iPhone Upgrade Program customers can get the prep work done before iPhone Xs and iPhone Xs Max pre-order with the Apple Store app until 4PM PDT on Thursday, September 13.',
            'Customers will be able to pre-order iPhone Xs and iPhone Xs Max beginning Friday, September 14, with availability beginning Friday, September 21, in more than 30 countries and territories including Australia, Austria, Belgium, Canada, China, Denmark, Finland, France, Germany, Guernsey, Hong Kong, Ireland, Isle of Man, Italy, Japan, Jersey, Luxembourg, Mexico, Netherlands, New Zealand, Norway, Portugal, Puerto Rico, Saudi Arabia, Singapore, Spain, Sweden, Switzerland, Taiwan, the UAE, UK, US and US Virgin Islands.',
            'iPhone Xs and iPhone Xs Max will be available in more than 25 countries and territories including Andorra, Armenia, Bahrain, Bulgaria, Croatia, Cyprus, Czech Republic, Estonia, Georgia, Greece, Greenland, Hungary, Iceland, India, Kazakhstan, Kuwait, Latvia, Liechtenstein, Lithuania, Malta, Monaco, Oman, Poland, Qatar, Romania, Russia, Slovakia, Slovenia and South Africa beginning Friday, September 28.',
            'Apple-designed accessories including leather and silicone cases in a range of colors will be available starting at $39 (US), while the iPhone Xs and iPhone Xs Max Leather Folio will be available starting at $99 (US).',
            'With Apple GiveBack, customers in the US can trade in their eligible device for an Apple Store Gift Card or a refund on their purchase. If their device isn’t eligible for credit, Apple will recycle it for free. ',
            'Anyone who wants to learn more or go further with iPhone Xs, iPhone Xs Max or iOS 12 can sign up for free Today at Apple sessions at apple.com/today.'
        ]
        for (let i = 0; i < products.length; i++) {
            table.push(
                <li className="product-list__item" key={i}>
                    {products[i]}
                </li>
            )
        }
        return table
    };

    render() {
        return(
            <Fragment>
                <div className="content-block">
                    <h2 className="title-section">
                        Описание
                    </h2>
                    <p className="product__text">
                        Cupertino, California — Apple today announced iPhone Xs and iPhone Xs Max,
                        the most advanced iPhones ever, taking the vision for the future of the smartphone
                        to a new level. The 5.8-inch iPhone Xs and 6.5-inch iPhone Xs Max feature stunning
                        Super Retina displays, a faster and improved dual camera system that offers
                        breakthrough photo and video features, the first 7-nanometer chip in a smartphone
                        — the A12 Bionic chip with next-generation Neural Engine — faster Face ID, wider
                        stereo sound, a beautiful new gold finish and introduce Dual SIM to iPhone. iPhone
                        Xs and iPhone Xs Max will be available for pre-order beginning Friday, September 14
                        and in stores beginning Friday, September 21.
                    </p>
                    <h4 className="title-small">
                        iPhone Xs Max bring the best and biggest displays to iPhone
                    </h4>
                    <ul className="product-list">
                        {this.getProductList()}
                    </ul>
                    <p className="product__text">
                        iPhone Xs and iPhone Xs Max come with iOS 12, the world’s most advanced
                        mobile operating system. iOS 12 introduces new AR experiences, helps people
                        rediscover and share photos, and makes communications more expressive and
                        fun with new Animoji and Memoji.
                    </p>
                </div>
            </Fragment>
        )
    }
}

export default Tab1;
