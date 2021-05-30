import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
function SavedMovies() {

    const moviesList = [
        {name: '33 слова о дизайне', duration: '1ч 47м', preview: require('../../images/testMovieCard.svg').default, cardstate: 'remove'},
        {name: '33 слова о дизайне', duration: '1ч 47м', preview: require('../../images/testMovieCard.svg').default, cardstate: 'remove'},
        {name: '33 слова о дизайне', duration: '1ч 47м', preview: require('../../images/testMovieCard.svg').default, cardstate: 'remove'},
        {name: '33 слова о дизайне', duration: '1ч 47м', preview: require('../../images/testMovieCard.svg').default, cardstate: 'remove'},
        {name: '33 слова о дизайне', duration: '1ч 47м', preview: require('../../images/testMovieCard.svg').default, cardstate: 'remove'},
        {name: '33 слова о дизайне', duration: '1ч 47м', preview: require('../../images/testMovieCard.svg').default, cardstate: 'remove'},
        {name: '33 слова о дизайне', duration: '1ч 47м', preview: require('../../images/testMovieCard.svg').default, cardstate: 'remove'},
    ] 

  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList moviesList={moviesList}/>
    </div>
  );
}

export default SavedMovies;
