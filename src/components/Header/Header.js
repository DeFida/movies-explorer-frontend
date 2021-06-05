import logo from '../../images/logo.svg'
import './Header.css';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

function Header(props) {
    return (
        <header className="header">
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <Navigation loggedIn={true} navOpened={props.navOpened} navHandler={props.navHandler} />
        </header>
    )
}


export default Header;