import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    return (
        <div className="movies-list">
            {Array.from(props.moviesList).map((card, id) => {
                return <MoviesCard key={id} card={card}/>
            })}
            
        </div>
    );
}

export default MoviesCardList;
