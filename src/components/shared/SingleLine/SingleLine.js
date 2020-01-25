import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import './SingleLine.scss';


class SingleLine extends React.Component {
  static propTypes = {
    category: PropTypes.string,
  }

  render() {
    return (
      <div className={this.props.category}>
        <Link to={`/search?category=${this.props.category}`} className="btn">
          {this.props.category}
        </Link>
      </div>
    );
  }
}

export default SingleLine;
