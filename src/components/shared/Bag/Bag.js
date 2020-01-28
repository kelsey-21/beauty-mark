import React from 'react';

import smash from '../../../helpers/data/smash';
import SingleBag from '../SingleBag/SingleBag';

import './Bag.scss';
import userProductData from '../../../helpers/data/userProductData';

class Bag extends React.Component {
  state = {
    userProducts: [],
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

    const SingleBagCard = () => userProducts && userProducts.map((userProduct) => <SingleBag key={userProduct.id} userProduct={userProduct} deleteUserProduct={this.deleteUserProduct} />);

    return (
      <div className="Bag">
        <h6>Your Makeup Bag</h6>
        <div className="bag-card-area">
        {SingleBagCard()}
        </div>
      </div>
    );
  }
}

export default Bag;
