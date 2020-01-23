import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import './SingleLine.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 360,
    maxWidth: 360,
    backgroundColor: 'none',
  },
  section1: {
    margin: theme.spacing(3, 2),
    position: 'absolute',
    width: 360,
  },
}));

export default function SingleLine(props) {
  const classes = useStyles();
  console.log(props.category);

  return (
    <div className={props.category}>
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="flex-end">
          <Link to="/search" className="btn">
            <Typography gutterBottom variant="body1">
              {props.category}
            </Typography>
          </Link>
        </Grid>
        <Divider />
        </div>
      </div>
    </div>
  );
}
