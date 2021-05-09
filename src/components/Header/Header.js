import logo from '../../images/logo.svg'
import './Header.css';

import Navigation from '../Navigation/Navigation';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="" />
            <Navigation loggedIn={true} />
        </header>
    )
}


export default Header;