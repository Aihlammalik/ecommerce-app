
import Grid from '../slider/responsiveSlider';
import Card from '../card/responsiveCard';
import NavigationBar from '../navigation/responsiveNav';
import RoutingForCategory from '../routingForCategory/routingForCategory'
function Home() {
    return(
        <>
        <Grid />
            <RoutingForCategory />
            {/* <Card /> */}
  
        </>
    )
}

export default Home;