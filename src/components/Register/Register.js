import '../Login/Login.css';

import logo from '../../images/logo.svg'

import { Link } from 'react-router-dom'

function Register() {
    return (
      <section className="log-section">
        <div className="login">
          <Link to="/"><img src={logo} alt="logo" /></Link>
          <h1 className="login__heading">Добро пожаловать!</h1>
          <form className="log-form">
            <div className="log-form__wrapper">
              <label htmlFor="name" className="log-form__label">Имя</label>
              <input type="text" name="name" id="name" className="log-form__input" />
              <p className="log-form__error" id="nameerr"></p>
            </div>
            <div className="log-form__wrapper">
              <label htmlFor="email" className="log-form__label">E-mail</label>
              <input type="email" name="email" id="email" className="log-form__input" />
              <p className="log-form__error" id="emailerr"></p>
            </div>
            <div className="log-form__wrapper">
              <label htmlFor="password" className="log-form__label">Пароль</label>
              <input type="password" name="password" id="password" className="log-form__input" />
              <p className="log-form__error" id="passworderr"></p>
            </div>
            <div className="log-form__submit-wrapper">
              <button className="log-form__submit" type="submit">Зарегистрироваться</button>
              <div className="log-form__para-wrapper">
                <p className="log-form__para">Уже зарегистрированы?</p>
                <Link to="/signin" className="log-form__link">Войти</Link>
              </div>
              
            </div>
          </form>
        </div>
      </section>
   
  );
}

export default Register;
