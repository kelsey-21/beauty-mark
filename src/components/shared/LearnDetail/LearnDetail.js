import React from 'react';
import PropTypes from 'prop-types';
import shapes from '../../../helpers/props/shapes';

import './LearnDetail.scss';

class LearnDetail extends React.Component {
  static propTypes = {
    learn: shapes.learnShape,
    setSingleLearn: PropTypes.func,
    selectedLearn: shapes.learnShape,
  }

  render() {
    const { selectedLearn } = this.props;

    return (
      <div className="LearnDetail">
        <div className="card mb-3 d-flex justify-content-center">
          <img className="card-img-top learn-detail-image" src={selectedLearn.imageUrl} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">{selectedLearn.name}</h5>
            <p className="card-text">{selectedLearn.name} {selectedLearn.description}</p>
            <p className="card-text">{selectedLearn.reasoning}</p>
            <p className="card-text"><small className="text-muted"><a href={selectedLearn.url}>Click for more information</a></small></p>
          </div>
        </div>
      </div>
    );
  }
}

export default LearnDetail;
