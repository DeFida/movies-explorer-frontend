import { Link, NavLink } from 'react-router-dom';

import './Navigation.css'
import accountIcon from '../../images/account-icon.svg'

function Navigation(props) {
    return (
        <nav className='nav'>
            {
                !props.loggedIn ?
                    <ul className='nav__elements'>
                        <li>
                            <Link to='signup' className='nav__register'>Регистрация</Link>
                        </li>
                        <li>
                            <Link to='signin' className='nav__login'>Войти</Link>
                        </li>
                    </ul>
                    :
                    <ul className='nav__elements'>
                        <li className='nav__element'>
                            <NavLink to='/movies' activeClassName='nav__link_active' className='nav__link'>Фильмы</NavLink>
                        </li>
                        <li className='nav__element'>
                            <NavLink to='/saved-movies' activeClassName='nav__link_active' className='nav__link'>Сохранённые фильмы</NavLink>
                        </li>
                        <li className='nav__element'>
                            <NavLink to='/profile'
                                activeClassName='nav__link_active'
                                className='nav__link'><p>Аккаунт</p> <img src={accountIcon} alt="" className="nav__icon" />
                            </NavLink>
                        </li>
                    </ul>
            }

        </nav>
    )
}

export default Navigation;