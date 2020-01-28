import React from 'react';

import SingleLine from '../../shared/SingleLine/SingleLine';
import productData from '../../../helpers/data/productData';
import image from '../../../helpers/images/background.png';
import Bag from '../../shared/Bag/Bag';
import authData from '../../../helpers/data/authData';

import './Face.scss';

class Face extends React.Component {
  state = {
    categories: [],
    isAdmin: false,
  }

  checkIfAdmin = () => {
    if (authData.getUid() === 'zydbWlIlYufAZU5qegcHhCpze3h2') {
      this.setState({ isAdmin: true });
    }
  }

  componentDidMount() {
    const categories = productData.getProductCategories();
    this.setState({ categories });
    this.checkIfAdmin();
  }

  render() {
    const { categories } = this.state;
    const singleLineDiv = categories.map((category) => <SingleLine key={category.id} category={category.category} />);
    return (
      <div className="Face-page">
        <div className="bag-div">
          <Bag isAdmin={this.state.isAdmin}/>
        </div>
        <div className="Face">
          <img className="face-image" src={image} alt="face" />
          <div>
            {singleLineDiv}
          </div>
        </div>
      </div>
    );
  }
}

export default Face;
