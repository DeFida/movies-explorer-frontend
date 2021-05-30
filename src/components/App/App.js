import './App.css';
import Header from '../Header/Header';

import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import React from 'react';
import Profile from '../Profile/Profile'
import Movies from '../Movies/Movies'
import Login from '../Login/Login'
import Register from '../Register/Register'
import { Switch, Route } from 'react-router';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  const [navOpened, setNavOpened] = React.useState(false)
  function navHandler(params) {
    setNavOpened(!navOpened);
  }

  return (
    <div className="app">
      {/*  */}
      <Switch>
        <Route path="/" exact>
          <Header navOpened={navOpened} navHandler={navHandler} />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header navOpened={navOpened} navHandler={navHandler} />
          <Movies></Movies>
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header navOpened={navOpened} navHandler={navHandler} />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile" exact>
          <Header navOpened={navOpened} navHandler={navHandler} />
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
