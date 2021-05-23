import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"white" ,marginTop: "5px" ,color:"black" ,textAlign : "center"}}>
        <Toolbar>
        
          <Typography variant="h6" className={classes.title} style={{paddingLeft:"100px"}}>
       <Link to="/">   All  </Link>
          </Typography>
          <Typography variant="h6" className={classes.title} >
          <Link to="/men">Men</Link> 
          </Typography>
          <Typography variant="h6" className={classes.title} >
        <Link to="/women">   women</Link>
          </Typography>
          <Typography variant="h6" className={classes.title} >
        <Link to='/jewllery'>   Jewllery</Link>
          </Typography>
          <Typography variant="h6" className={classes.title} >
          <Link to='/accessories'>   accessories</Link>
          </Typography>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    </div>
  )}