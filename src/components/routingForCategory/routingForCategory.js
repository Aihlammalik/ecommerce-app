import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';


//pages for navigation

import AllCategory from '../routingForCategory/pagesForRouting/all';
import Men from '../routingForCategory/pagesForRouting/men';
import Women from '../routingForCategory/pagesForRouting/women';
import Jewllery from '../routingForCategory/pagesForRouting/jewllery';
import Accessories from '../routingForCategory/pagesForRouting/accessories';
import AppbarForCategory from '../routingForCategory/AppbarForCategory/appbarForCategory'



function Routing() {
    return(
<Router>
    <AppbarForCategory />
    <Switch>
        <Route exact path= "/">
            <AllCategory /> 
        </Route>

        <Route path= "/men">
            <Men/> 
        </Route>

        <Route path= "/women">
            <Women /> 
        </Route>

        <Route path= "/jewllery">
            <Jewllery /> 
        </Route>

        <Route path= "/accessories">
            <Accessories /> 
        </Route>
    </Switch>
</Router>

    )
}

export default Routing;