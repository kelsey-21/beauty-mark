import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logOutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    const buildNavbar = () => {
      if (authed) {
        return (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Face</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/learn">Learn More</Link>
            </li>
            <li className="nav-item">
            <Button variant="outlined" color="secondary" onClick={this.logOutClickEvent}>
              Logout
            </Button>
            </li>
          </ul>
        );
      }
      return (<ul className="navbar-nav ml-auto"></ul>);
    };

    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Beauty Mark</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-controls="navbarSupportedContent"
            data-target="#navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          { buildNavbar() }
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
