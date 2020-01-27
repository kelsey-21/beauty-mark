import React from 'react';
import {
  Card, CardImgOverlay, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardImg,
} from 'reactstrap';

import shapes from '../../../helpers/props/shapes';
import authData from '../../../helpers/data/authData';

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
    console.log(newUserProduct);
  }

  render() {
    const { product } = this.props;

    return (
      <div className="SearchCard">
      <Card>
        <CardImg top width="100%" src={this.randomPic()} alt="lipstick smear" />
        <CardImgOverlay>
          <CardTitle>{product.name}</CardTitle>
          <CardSubtitle>{product.brand} {product.category}</CardSubtitle>
        </CardImgOverlay>
        <CardBody>
          <CardText>Ingredients {product.ingredients}</CardText>
          <Button onClick={this.saveProductEvent}>Add to my bag</Button>
        </CardBody>
      </Card>
    </div>
    );
  }
}

export default SearchCard;
