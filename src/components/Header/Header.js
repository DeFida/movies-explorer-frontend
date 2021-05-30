import logo from '../../images/logo.svg'
import './Header.css';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

function Header(props) {
    return (
        <header className="header">
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <Navigation loggedIn={true} navOpened={props.navOpened} navHandler={props.navHandler} />
=======

import Navigation from '../Navigation/Navigation';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="" />
            <Navigation loggedIn={true} />
>>>>>>> d4b144a62c91f90ecd7a13fabedbb89ad6033210
        </header>
    )
}


export default Header;