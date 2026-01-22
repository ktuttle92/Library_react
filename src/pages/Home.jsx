import Landing from "../Components/Landing"
import Highlights from '../Components/Highlights';
import Featured from '../Components/Features';
import Discounted from '../Components/Discounted'
import Explore from '../Components/Explore'

function Home(){
    return(
        <div>
         <Landing/>
         <Highlights/>
         <Featured/>
         <Discounted />
         <Explore/>
         </div>   )
}

export default Home