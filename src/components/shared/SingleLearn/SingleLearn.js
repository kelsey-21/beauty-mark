import React from 'react';
import PropTypes from 'prop-types';
import shapes from '../../../helpers/props/shapes';

import './SingleLearn.scss';

class SingleLearn extends React.Component {
  static propTypes = {
    learn: shapes.learnShape,
    setSingleLearn: PropTypes.func,
  }

  setSelectedLearn = (e) => {
    e.preventDefault();
    const { setSingleLearn, learn } = this.props;
    setSingleLearn(learn);
  }

  render() {
    const { learn } = this.props;

    return (
      <button className="SingleLearn btn btn-outline" onClick={this.setSelectedLearn}>
        <img className="single-learn-risk" src={learn.imageUrl} alt="risk-learn-more" />
        <p>{learn.name}</p>
      </button>
    );
  }
}

export default SingleLearn;
