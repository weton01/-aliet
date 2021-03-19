import { Input, Badge  } from 'antd';
import { ShoppingCartOutlined, MenuOutlined, CloseOutlined  } from '@ant-design/icons'

import { useNavbar } from '../../providers/navbar'

import './navbar.styles.scss';


function Navbar () {

    const { Search } = Input;
    const { visible, setVisible } = useNavbar();

    const search_placeholder = "Busque produtos, categorias e muito mais...";
    
    const badge_cart = (
        <Badge size="small" count={9} >
            <ShoppingCartOutlined className="icon-cart" />
        </Badge>
    )
    
    const nav_list_item = [
        "Crie sua conta",
        "Entre",
        "Compras",
        badge_cart
    ]

    const renderListItems = () => {
        return nav_list_item.map((item, index) => { 
            return <li key={`li-${index}`} className="user-panel-list-item">
                {item}
            </li>
        })
    }
    
    const handleVisible = (e) => { 
        setVisible(!visible)
    }

    const renderMobileIcon = (visible) => { 
        if(visible)
            return <CloseOutlined  className="nav-icon-menu" onClick={handleVisible}/>
        return  <MenuOutlined className="nav-icon-menu" onClick={handleVisible}/>

    }
    
    const makeClassName = (visible) =>  {
        if (visible) 
            return "color menu-visible"
        return "color"
    }    

    return ( 
        <>
            <div className="nav-search-input-content">
                <Search className="nav-search-input" placeholder={search_placeholder} />
            </div>
            <ul className="nav-user-panel-list">
                { renderListItems() }
            </ul>
            <div style={{position: 'relative'}}>
                {renderMobileIcon(visible)}
                <div className={makeClassName(visible)} />
            </div>
        </>
    )
}

export default Navbar;