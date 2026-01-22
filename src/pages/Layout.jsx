import {Outlet} from 'react-router-dom'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

function Layout({numberOfItems}){
       
    return(
        <div>
            <Nav numberOfItems={numberOfItems()}/>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

export default Layout