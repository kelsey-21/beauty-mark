import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import BM from '../../../helpers/images/BM.png';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  }

  static propTypes = {
    authed: PropTypes.bool,
  }

  logOutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  toggleNav = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { authed } = this.props;
    const buildNavbar = () => {
      if (authed) {
        return (
          <Nav className="navbar-nav ml-auto">
          <NavItem>
            <Link className="nav-link" to="/">Face</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/learn">Learn More</Link>
          </NavItem>
          <NavItem>
            <Button onClick={this.logOutClickEvent}>
              Logout
            </Button>
          </NavItem>
          </Nav>
        );
      }
      return (<ul className="navbar-nav mr-auto"></ul>);
    };

    return (
      <div className="MyNavbar">
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
          <NavItem>
            <Link className="navbar-brand" to="/"><img className="navbar-logo" src={BM} alt="Beauty Mark Logo" /></Link>
          </NavItem>
          <NavbarToggler onClick={this.toggleNav} className="toggler" />
          <Collapse isOpen={this.state.isOpen} navbar>
            { buildNavbar() }
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

// <ul className="navbar-nav ml-auto">
//   <li className="nav-item">
//     <Link className="nav-link" to="/">Face</Link>
//   </li>
//   <li className="nav-item">
//     <Link className="nav-link" to="/learn">Learn More</Link>
//   </li>
//   <li className="nav-item">
//   <Button onClick={this.logOutClickEvent}>
//     Logout
//   </Button>
//   </li>
// </ul>

export default MyNavbar;
