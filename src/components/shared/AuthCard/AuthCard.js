import React from 'react';
import { Button } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';

import BM from '../../../helpers/images/BM.png';

import './AuthCard.scss';


class AuthCard extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  render() {
    return (
      <div className="AuthCard">
        <div className="card">
          <img className="logo-auth card-img-top" src={BM} alt="logo" />
          <div className="card-body">
          <div className="card-title">Login to detox your makeup bag</div>
          <Button onClick={this.loginClickEvent}>
            <img className="google-button" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png" alt="Google" /> Login</Button>
          </div>
        </div>
    </div>
    );
  }
}

export default AuthCard;
