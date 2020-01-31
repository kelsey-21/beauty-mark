import React from 'react';

import smash from '../../../helpers/data/smash';
import Pink from '../../../helpers/images/Pink.jpeg';
import Red from '../../../helpers/images/Red.jpeg';
import RedOrange from '../../../helpers/images/RedOrange.jpeg';
import Maroon from '../../../helpers/images/Maroon.jpeg';
import Brown from '../../../helpers/images/Brown.jpeg';
import Black from '../../../helpers/images/Black.jpeg';
import DarkBrown from '../../../helpers/images/DarkBrown.jpeg';

import './ProductDetail.scss';

class ProductDetail extends React.Component {
  state = {
    productWithData: [],
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
          <img src={Red} className="img-top" alt=".lipstick smear.." />
          <img src={DarkBrown} className="img-top" alt=".lipstick smear.." />
          <img src={RedOrange} className="img-top" alt=".lipstick smear.." />
          <img src={Maroon} className="img-top" alt=".lipstick smear.." />
          <img src={Brown} className="img-top" alt=".lipstick smear.." />
          <img src={Black} className="img-top" alt=".lipstick smear.." />
          <img src={Pink} className="img-top" alt=".lipstick smear.." />
          <img src={Red} className="img-top" alt=".lipstick smear.." />
          <img src={DarkBrown} className="img-top" alt=".lipstick smear.." />
          <img src={RedOrange} className="img-top" alt=".lipstick smear.." />
          <img src={Maroon} className="img-top" alt="lipstick smear..." />
          <img src={Brown} className="img-top" alt=".lipstick smear.." />
          <img src={Black} className="img-top" alt="lipstick smear..." />
          <img src={Pink} className="img-top" alt=".lipstick smear.." />
          <img src={Red} className="img-top" alt=".lipstick smear.." />
          <img src={DarkBrown} className="img-top" alt=".lipstick smear.." />
        </div>
        <div className="card mb-3 border-0">
          <div className="card-body">
            <h5 className="card-title">{productWithData.productBrand} {productWithData.productName}</h5>
            <div className="card-text">
              <div className="row">
                <div className="col">
                  <div>
                  {productWithData.riskName}
                  </div>
                  <div>
                  {productWithData.riskImage}
                  </div>
                </div>
              </div>
            </div>
            <p className="card-text"><small className="text-muted">{productWithData.productIngredients}</small></p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
