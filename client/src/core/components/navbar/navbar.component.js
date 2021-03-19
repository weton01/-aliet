import { useRouter } from 'next/router'
 
import DefaultNavbar from './signin-nav.component'

import './navbar.styles.scss';

function Navbar () {
    const router = useRouter()

    const getNavbar = (route) => { 
        if(route === '/auth/signin') 
            return <></>
        return <DefaultNavbar/>
    }

    return ( 
        <nav className="header-aliet">
            <div className="nav-aliet">
                <div className="nav-icon"/>
                {getNavbar(router.pathname)}
            </div>
        </nav>
    )
}

export default Navbar;