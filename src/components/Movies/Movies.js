import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {

  const moviesList = [
    {name: '33 слова о дизайне', duration: '1ч 47м', preview: require('../../images/testMovieCard.svg').default, cardstate: 'saved'},
    {name: '33 слова о дизайне', duration: '1ч 47м', preview: require('../../images/testMovieCard.svg').default, cardstate: 'notsaved'},
    {name: '33 слова о дизайне', duration: '1ч 47м', preview: require('../../images/testMovieCard.svg').default, cardstate: 'notsaved'},
    {name: '33 слова о дизайне', duration: '1ч 47м', preview: require('../../images/testMovieCard.svg').default, cardstate: 'notsaved'},
    {name: '33 слова о дизайне', duration: '1ч 47м', preview: require('../../images/testMovieCard.svg').default, cardstate: 'notsaved'},
    {name: '33 слова о дизайне', duration: '1ч 47м', preview: require('../../images/testMovieCard.svg').default, cardstate: 'saved'},
    {name: '33 слова о дизайне', duration: '1ч 47м', preview: require('../../images/testMovieCard.svg').default, cardstate: 'saved'},
] 

  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList moviesList={moviesList}/>
    </div>
  );
}

export default Movies;
