import React from 'react';
import shapes from '../../../helpers/props/shapes';

import './SingleLearn.scss';

class SingleLearn extends React.Component {
  static propTypes = {
    learn: shapes.learnShape,
  }

  render() {
    const { learn } = this.props;

    return (
      <div className="SingleLearn">
        <img className="single-learn-risk" src={learn.imageUrl} alt="risk-learn-more" />
        <p>{learn.name}</p>
      </div>
    );
  }
}

export default SingleLearn;
