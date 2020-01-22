import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase/app';
import 'firebase/auth';

import './AuthCard.scss';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 275,
    height: 400,
  },
  title: {
    fontSize: 26,
  },
  pos: {
    marginBottom: 12,
  },
});

const loginClickEvent = (e) => {
  e.preventDefault();
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

export default function AuthCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Beauty Mark
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Login to detox your makeup bag
        </Typography>
      </CardContent>
      <CardActions className="login-button">
        <Button variant="contained" color="secondary" size="large" onClick={loginClickEvent}>
          <img className="google-button" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png" alt="Google"/> Login
        </Button>
      </CardActions>
    </Card>
  );
}
