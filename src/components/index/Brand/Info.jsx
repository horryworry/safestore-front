import React, {Component, Fragment} from "react";
import apple from "../../../static/images/content/brands/appleBrand.png";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeWindowSize, hideModal, showModal} from "../../../actions/mobileMenuActions";
import sale1 from "../../../static/images/content/news/sale1.jpg";
import certificate from "../../../static/images/general/certificate.jpg";

class Info extends Component {
    render() {
        return (
            <div className="brand-info">
                <div className="brand-info__tablet">
                    <div className="brand__logo">
                        <img src={apple} alt={"Логотип бренда"} className="brand__img"></img>
                    </div>
                    <div className="brand__certificates" style={{display: `${this.props.screenWidth < 1140 && this.props.screenWidth > 767 ? "" : "none"}`}}>
                            <span className="brand__certificates-label">
                                Сертификаты соответствия:
                            </span>
                        <div className="brand__certificate">
                            <img src="https://via.placeholder.com/210x290" alt="Сертификат" className="brand__certificate-img"/>
                        </div>
                    </div>
                </div>
                <div className="brand__description">
                    <p className="text">
                        <b>Apple Inc.</b> is an American multinational technology company headquartered
                        in Cupertino, California, that designs, develops, and
                        sells consumer electronics, computer software, and online services. It is considered
                        one of the Big Four technology companies, along with Amazon, Google, and Facebook
                    </p>
                    <p className="text">
                        Apple was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in April
                        1976 to develop and sell Wozniak's Apple I personal computer,
                        though Wayne sold his share back within 12 days. It was incorporated
                        as Apple Computer, Inc., in January 1977, and sales of its computers,
                        including the Apple II, grew quickly.
                    </p>
                    <p className="text">
                        Apple is well known for its size and revenues. Its worldwide
                        annual revenue totaled $265 billion for the 2018 fiscal year.
                        Apple is the world's largest technology company by revenue and
                        one of the world's most valuable companies. It is also the world's
                        third-largest mobile phone manufacturer after Samsung and Huawei
                    </p>
                </div>
                <div className="brand__certificates" style={{display: `${this.props.screenWidth >= 1140 || this.props.screenWidth <= 767 ? "" : "none"}`}}>
                    <span className="brand__certificates-label">
                        Сертификаты соответствия:
                    </span>
                    <div className="brand__certificate">
                        <img src={certificate} alt="Сертификат" className="brand__certificate-img"/>
                    </div>
                </div>
            </div>

        );
    }
}

Info.propTypes = {
    screenWidth: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
    screenWidth: state.mobileMenu.screenWidth,
});

export default connect(mapStateToProps)(Info);