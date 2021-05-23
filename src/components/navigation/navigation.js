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
       <Link to="/">   HOME  </Link>
          </Typography>
          <Typography variant="h6" className={classes.title} >
          <Link to="/feature">Features</Link> 
          </Typography>
          <Typography variant="h6" className={classes.title} >
        <Link to="/shop">   Shop</Link>
          </Typography>
          <Typography variant="h6" className={classes.title} >
        <Link to='/element'>   Elements</Link>
          </Typography>
          <Typography variant="h6" className={classes.title} >
          <Link to='/blog'>   Blogs</Link>
          </Typography>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
 


//   return (
//     <Navbar bg="light" expand="lg">
//   <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//   <Navbar.Toggle aria-controls="navbarScroll" />
//   <Navbar.Collapse id="navbarScroll">
//     <Nav
//       className="mr-auto my-2 my-lg-0"
//       style={{ maxHeight: '100px' }}
//       navbarScroll
//     >
//       <Nav.Link href="#action1">Home</Nav.Link>
//       <Nav.Link href="#action2">Link</Nav.Link>
//       <NavDropdown title="Link" id="navbarScrollingDropdown">
//         <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
//       </NavDropdown>
//       <Nav.Link href="#" disabled>
//         Link
//       </Nav.Link>
//     </Nav>
//     <Form className="d-flex">
//       <FormControl
//         type="search"
//         placeholder="Search"
//         className="mr-2"
//         aria-label="Search"
//       />
//       <Button variant="outline-success">Search</Button>
//     </Form>
//   </Navbar.Collapse>
// </Navbar>
//   );
}

