import { useNavbar } from '../../../providers/navbar' 

import './menu-mobile.styles.scss';

function MenuMobile() {
    const {visible} = useNavbar();

    const makeClassName = (visible) =>  {
        if (visible) 
            return "menu-mobile menu-visible"
        else return "menu-mobile"
    }

    return  <div className={makeClassName(visible)} >

    </div>
}

export default MenuMobile;