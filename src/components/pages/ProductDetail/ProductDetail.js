import React from 'react';

import smash from '../../../helpers/data/smash';

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
    return (
      <div className="ProductDetail">
        Product Detail Page
      </div>
    );
  }
}

export default ProductDetail;
