import './NavTab.css';

function NavTab() {
    return (
        <ul className="navtab">
            <li className="navtab__element"><button type="button" className="navtab__button">О проекте</button></li>
            <li className="navtab__element"><button type="button" className="navtab__button">Технологии</button></li>
            <li className="navtab__element"><button type="button" className="navtab__button">Студент</button></li>
        </ul>
  );
}

export default NavTab;
