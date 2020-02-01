import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardBody, Button,
  CardTitle, CardText, CardImg,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import shapes from '../../../helpers/props/shapes';

import Pink from '../../../helpers/images/Pink.jpeg';
import Red from '../../../helpers/images/Red.jpeg';
import RedOrange from '../../../helpers/images/RedOrange.jpeg';
import Maroon from '../../../helpers/images/Maroon.jpeg';
import Brown from '../../../helpers/images/Brown.jpeg';
import Black from '../../../helpers/images/Black.jpeg';
import DarkBrown from '../../../helpers/images/DarkBrown.jpeg';
import './SingleBag.scss';

const picArr = [
  Pink, Red, RedOrange, Maroon, Brown, Black, DarkBrown,
];


class SingleBag extends React.Component {
  state = {
    isOpen: false,
  }

  static propTypes = {
    userProduct: shapes.userProductShape,
    deleteUserProduct: PropTypes.func,
    isAdmin: PropTypes.bool,
  }

  randomPic = () => picArr[Math.floor(Math.random() * picArr.length)];

  deleteEvent = (e) => {
    e.preventDefault();
    const { userProduct, deleteUserProduct } = this.props;
    deleteUserProduct(userProduct.userProductId);
  }

  render() {
    const { userProduct } = this.props;

    return (
      <div className="SingleBagCard">
        <Card>
          <CardImg top width="100%" src={this.randomPic()} alt="Card image cap" />
          <CardBody>
            <CardTitle>{userProduct.name}</CardTitle>
            <CardText>{userProduct.brand}</CardText>
            <CardText><Link to={`/face/product/${userProduct.productId}`} className="btn btn-outline-secondary" color="link">View More</Link></CardText>
            <Button color="link" onClick={this.deleteEvent}><FontAwesomeIcon icon={faTimes} size="sm"/></Button>
            {
              ((this.props.isAdmin) ? <Link to={`/face/update/${userProduct.productId}`} color="link" onClick={this.updateEvent}><FontAwesomeIcon icon={faPen} size="xs"/></Link> : '')
            }
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SingleBag;
