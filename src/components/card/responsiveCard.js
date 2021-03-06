import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Crad from '../card/card'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
      <Crad />
        </Grid>
        <Grid item xs={12} sm={3}>
      <Crad />
          
        </Grid>
        <Grid item xs={12} sm={3}>
      <Crad />
        
        </Grid>
        <Grid item xs={12} sm={3}>
        <Crad />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
      <Crad />
        </Grid>
        <Grid item xs={12} sm={3}>
      <Crad />
          
        </Grid>
        <Grid item xs={12} sm={3}>
      <Crad />
        
        </Grid>
        <Grid item xs={12} sm={3}>
        <Crad />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
      <Crad />
        </Grid>
        <Grid item xs={12} sm={3}>
      <Crad />
          
        </Grid>
        <Grid item xs={12} sm={3}>
      <Crad />
        
        </Grid>
        <Grid item xs={12} sm={3}>
        <Crad />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
      <Crad />
        </Grid>
        <Grid item xs={12} sm={3}>
      <Crad />
          
        </Grid>
        <Grid item xs={12} sm={3}>
      <Crad />
        
        </Grid>
        <Grid item xs={12} sm={3}>
        <Crad />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
      <Crad />
        </Grid>
        <Grid item xs={12} sm={3}>
      <Crad />
          
        </Grid>
        <Grid item xs={12} sm={3}>
      <Crad />
        
        </Grid>
        <Grid item xs={12} sm={3}>
        <Crad />
        </Grid>
      </Grid>
    </div>
  );
}
