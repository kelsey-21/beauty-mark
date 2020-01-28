import React from 'react';

import shapes from '../../../helpers/props/shapes';
import authData from '../../../helpers/data/authData';
import userProductData from '../../../helpers/data/userProductData';

import Pink from '../../../helpers/images/Pink.jpeg';
import Red from '../../../helpers/images/Red.jpeg';
import RedOrange from '../../../helpers/images/RedOrange.jpeg';
import Maroon from '../../../helpers/images/Maroon.jpeg';
import Brown from '../../../helpers/images/Brown.jpeg';
import Black from '../../../helpers/images/Black.jpeg';
import DarkBrown from '../../../helpers/images/DarkBrown.jpeg';

import './SearchCard.scss';

const picArr = [
  Pink, Red, RedOrange, Maroon, Brown, Black, DarkBrown,
];

class SearchCard extends React.Component {
  static propTypes = {
    product: shapes.productShape,
  }

  randomPic = () => picArr[Math.floor(Math.random() * picArr.length)];


  saveProductEvent = (e) => {
    e.preventDefault();
    const { product } = this.props;
    const uid = authData.getUid();
    const newUserProduct = {};
    newUserProduct.productId = product.id;
    newUserProduct.uid = uid;
    userProductData.saveUserProduct(newUserProduct)
      .then(() => {
        this.props.history.push('/');
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { product } = this.props;

    return (
      <div className="SearchCard border">
        <div className="card border-0 search-card-img">
          <img src={this.randomPic()} className="card-img" alt="lipstick smear" />
          <div className="card-img-overlay">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-title">{product.brand} {product.category}</p>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text text-muted">Ingredients {product.ingredients}</p>
          <button className="btn btn-outline-secondary" onClick={this.saveProductEvent}>Add to my bag</button>
        </div>
    </div>
    );
  }
}

export default SearchCard;
