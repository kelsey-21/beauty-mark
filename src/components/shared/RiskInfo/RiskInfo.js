import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import shapes from '../../../helpers/props/shapes';

class RiskInfo extends React.Component {
  static propTypes = {
    risks: PropTypes.arrayOf(shapes.learnShape),
  }

  render() {
    const { risk } = this.props;

    return (
      <div className="RiskInfo">
        <Link to={`/learn?risk=${this.props.risk.id}`}><img className="risk-info-images" src={risk.imageUrl} alt={risk.name} /></Link>
        <h6>{risk.name}</h6>
      </div>
    );
  }
}

export default RiskInfo;
