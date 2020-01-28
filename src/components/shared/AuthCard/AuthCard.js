import React from 'react';
import {
  Card, Button, CardTitle,
  CardText, Row,
} from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';

import './AuthCard.scss';


class AuthCard extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  render() {
    return (
      <Row className="Auth">
        <Card body>
          <CardTitle>Beauty Mark</CardTitle>
          <CardText>Login to detox your makeup bag</CardText>
          <Button onClick={this.loginClickEvent}>
            <img className="google-button" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png" alt="Google" /> Login</Button>
        </Card>
    </Row>
    );
  }
}

export default AuthCard;
