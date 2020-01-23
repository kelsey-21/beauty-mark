import React from 'react';

import SingleLine from '../../shared/SingleLine/SingleLine';
import productData from '../../../helpers/data/productData';

import './Face.scss';

class Face extends React.Component {
  state = {
    categories: [],
  }

  componentDidMount() {
    const categories = productData.getProductCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    const singleLineDiv = categories.map((category) => <SingleLine key={category.id} category={category.category} />);
    return (
      <div className="Face">
        <div className="face-image">
          {singleLineDiv}
        </div>
      </div>
    );
  }
}

export default Face;
