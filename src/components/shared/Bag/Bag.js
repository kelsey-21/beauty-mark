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

    const SingleBagCard = () => userProducts && userProducts.map((userProduct) => <SingleBag key={userProduct.id} userProduct={userProduct} />);
    console.log(SingleBagCard());

    return (
      <div className="Bag">
        <h1>Test</h1>
        {SingleBagCard()}
      </div>
    );
  }
}

export default Bag;
