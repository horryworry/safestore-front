import React, { Fragment, Component } from 'react';

class Tab2 extends Component {

    getProductTableRow = (label, value) => {
        return (
            <tr className="product-table__row">
                <td className="product-table__cell">
                    {label}
                </td>
                <td className="product-table__cell">
                    {value}
                </td>
            </tr>
        )
    }

    render() {
        return(
            <Fragment>
                <div className="content-block">
                    <h2 className="title-section">
                        Характеристики
                    </h2>
                    <div className="product-table__wrapper">
                        <span className="product-table__title">
                            Основное
                        </span>
                        <table className="product-table">
                            <tbody>
                                {this.getProductTableRow('Производитель', 'Apple')}
                                {this.getProductTableRow('Display', 'Super Retina HD display')}
                                {this.getProductTableRow('Angle', 'Wide-angle: ƒ/1.8 aperture')}
                            </tbody>
                        </table>
                    </div>
                    <div className="product-table__wrapper">
                        <span className="product-table__title">
                            Технические детали
                        </span>
                        <table className="product-table">
                            <tbody>
                            {this.getProductTableRow('Производитель', 'Apple')}
                            {this.getProductTableRow('Display', 'Super Retina HD display')}
                            {this.getProductTableRow('Angle', 'Wide-angle: ƒ/1.8 aperture')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Tab2;
