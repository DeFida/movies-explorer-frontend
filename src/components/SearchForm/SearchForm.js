import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';

function SearchForm() {
    return (
        <form className="searchform">
            <div className="searchform__input-wrapper">
                <img src={searchIcon} alt="search" className="searchform__search-icon" />
                <input type="text" placeholder="Фильм" className="searchform__input" />
                <button type="submit" className="searchform__button">Найти</button>
            </div>

            <div className="searchform__switch">
                <input type="checkbox" id="check" />
                <label htmlFor="check">
                    <span></span>
                    <div><i></i></div>
                </label>
                <p className="searchform__shorts">Короткометражки</p>
            </div>
        </form>
    );
}

export default SearchForm;
