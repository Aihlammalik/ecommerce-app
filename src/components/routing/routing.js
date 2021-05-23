import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';


//pages for navigation

import Home from '../pages/home';
import Feature from '../pages/features';
import Shop from '../pages/home';
import Element from '../pages/elements';
import Blog from '../pages/blog';
import Navigation from '../navigation/navigation';
import AppBar from '../appbar/appbar';
import ResponsiveNav from '../navigation/responsiveNav'


function Routing() {
    return(
<Router>
    <AppBar />
     {/* <Navigation /> */}
     <ResponsiveNav />
    <Switch>
        <Route exact path= "/">
            <Home /> 
        </Route>

        <Route path= "/feature">
            <Feature/> 
        </Route>

        <Route path= "/shop">
            <Shop /> 
        </Route>

        <Route path= "/element">
            <Element /> 
        </Route>

        <Route path= "/blog">
            <Blog /> 
        </Route>
    </Switch>
</Router>

    )
}

export default Routing;