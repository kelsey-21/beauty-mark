import React from 'react';

import userProductData from '../../../helpers/data/userProductData';

import './Bag.scss';

class Bag extends React.Component {
  state = {
    userProducts: [],
  }

  componentDidMount() {
    userProductData.getUserProducts()
      .then((userProducts) => {
        this.setState({ userProducts });
      })
      .catch((err) => console.error(err));
  }

  render() {
    console.log(this.state.userProducts);
    return (
      <div className="Bag">
      </div>
    );
  }
}

export default Bag;
