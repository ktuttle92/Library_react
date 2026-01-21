import Landing from "../Components/Landing"
import Highlights from '../Components/Highlights';
import Featured from '../Components/Features';
import Discounted from '../Components/Discounted'
import Explore from '../Components/Explore'
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"

function Home(){
    return(
        <div>
         <Nav/>
         <Landing/>
         <Highlights/>
         <Featured/>
         <Discounted />
         <Explore/>
         <Footer/>
        </div>   )
}

export default Home