import React from 'react';

import './Learn.scss';

class Learn extends React.Component {
  render() {
    return (
      <div className="Learn">
        <h1>Learn Page</h1>
        <div className="text-muted credit-div">Icons made by the following authors from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          <ul>
            <li><a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a></li>
            <li><a href="https://www.flaticon.com/authors/fjstudio" title="fjstudio">fjstudio</a></li>
            <li><a href="https://www.flaticon.com/authors/catkuro" title="catkuro">catkuro</a></li>
            <li><a href="https://www.flaticon.com/authors/surang" title="surang">surang</a></li>
            <li><a href="https://www.flaticon.com/authors/mynamepong" title="mynamepong">mynamepong</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Learn;
