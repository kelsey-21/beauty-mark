import React from 'react';

import smash from '../../../helpers/data/smash';
import SingleBag from '../SingleBag/SingleBag';

import './Bag.scss';

class Bag extends React.Component {
  state = {
    userProducts: [],
  }

  componentDidMount() {
    smash.getCompleteUserProducts()
      .then((userProducts) => {
        this.setState({ userProducts });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { userProducts } = this.state;

    const SingleBagCard = () => userProducts.map((userProduct) => <SingleBag key={userProduct.id} userProduct={userProduct} />);

    return (
      <div className="Bag">
        {SingleBagCard()}
      </div>
    );
  }
}

export default Bag;
