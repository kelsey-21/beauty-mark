import React from 'react';

import SingleLine from '../../shared/SingleLine/SingleLine';

import './Face.scss';

class Face extends React.Component {
  render() {
    return (
      <div className="Face">
        <div className="face-image">
          <SingleLine />
        </div>
      </div>
    );
  }
}

export default Face;
