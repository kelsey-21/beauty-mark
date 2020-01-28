import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import smash from '../../../helpers/data/smash';
import SingleBag from '../SingleBag/SingleBag';

import './Bag.scss';
import userProductData from '../../../helpers/data/userProductData';

class Bag extends React.Component {
  state = {
    userProducts: [],
  }

  static propTypes = {
    isAdmin: PropTypes.bool,
  }


  componentDidMount() {
    this.getAllUserProducts();
  }

  getAllUserProducts = () => {
    smash.getCompleteUserProducts()
      .then((userProducts) => {
        this.setState({ userProducts });
      })
      .catch((err) => console.error(err));
  }

  deleteUserProduct = (userProductId) => {
    userProductData.deleteUserProduct(userProductId)
      .then(() => this.getAllUserProducts())
      .catch((error) => console.error(error));
  }

  render() {
    const { userProducts } = this.state;

    const SingleBagCard = () => userProducts && userProducts.map((userProduct) => <SingleBag key={userProduct.id} userProduct={userProduct} deleteUserProduct={this.deleteUserProduct} isAdmin={this.props.isAdmin}/>);

    return (
      <div className="Bag">
        <h6>Your Makeup Bag <Link to="/search"><FontAwesomeIcon icon={faPlus} size="sm"/></Link></h6>
        <div className="bag-card-area">
        {SingleBagCard()}
        </div>
      </div>
    );
  }
}

export default Bag;
