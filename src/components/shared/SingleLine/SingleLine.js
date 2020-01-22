import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
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

export default function SingleLine() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="left">
            <Typography gutterBottom variant="p">
              Toothbrush
            </Typography>
        </Grid>
        <Divider />
      </div>
    </div>
  );
}
