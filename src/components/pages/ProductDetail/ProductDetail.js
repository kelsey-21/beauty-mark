import React from 'react';

import smash from '../../../helpers/data/smash';
import Pink from '../../../helpers/images/Pink.jpeg';
import Red from '../../../helpers/images/Red.jpeg';
import RedOrange from '../../../helpers/images/RedOrange.jpeg';
import Maroon from '../../../helpers/images/Maroon.jpeg';
import Brown from '../../../helpers/images/Brown.jpeg';
import Black from '../../../helpers/images/Black.jpeg';
import DarkBrown from '../../../helpers/images/DarkBrown.jpeg';

import RiskInfo from '../../shared/RiskInfo/RiskInfo';

import './ProductDetail.scss';

class ProductDetail extends React.Component {
  state = {
    productWithData: {},
  }

  componentDidMount() {
    this.getCompleteProduct();
  }

  getCompleteProduct = () => {
    const { productId } = this.props.match.params;
    smash.getCompleteProducts(productId)
      .then((productWithData) => {
        this.setState({ productWithData });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { productWithData } = this.state;

    return (
      <div className="ProductDetail">
        <div className="images d-flex flex-row">
          <img src={Pink} className="img-top" alt="lipstick smear" />
          <img src={Red} className="img-top" alt="lipstick smear" />
          <img src={DarkBrown} className="img-top" alt="lipstick smear" />
          <img src={RedOrange} className="img-top" alt="lipstick smear" />
          <img src={Maroon} className="img-top" alt="lipstick smear" />
          <img src={Brown} className="img-top" alt="lipstick smear" />
          <img src={Black} className="img-top" alt="lipstick smear" />
          <img src={Pink} className="img-top" alt="lipstick smear" />
          <img src={Red} className="img-top" alt="lipstick smear" />
          <img src={DarkBrown} className="img-top" alt="lipstick smear" />
          <img src={RedOrange} className="img-top" alt="lipstick smear" />
          <img src={Maroon} className="img-top" alt="lipstick smear" />
          <img src={Brown} className="img-top" alt="lipstick smear" />
          <img src={Black} className="img-top" alt="lipstick smear" />
          <img src={Pink} className="img-top" alt="lipstick smear" />
          <img src={Red} className="img-top" alt="lipstick smear" />
          <img src={DarkBrown} className="img-top" alt="lipstick smear" />
        </div>
        <div className="product-detail-card card mb-3 border-0">
          <div className="card-body">
            <h5 className="card-title">{productWithData.brand}</h5>
            <h5 className="card-title">{productWithData.name}</h5>
            <p className="card-text"><small className="text-muted">Ingredients {productWithData.ingredients}</small></p>
            <div className="d-flex justify-content-center">
            {productWithData.name && productWithData.risks.map((risk) => <RiskInfo key={risk.name} risk={risk} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
