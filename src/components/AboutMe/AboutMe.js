import './AboutMe.css';
import ComponentHeadings from '../ComponentHeadings/ComponentHeadings'
import React from 'react';


function AboutMe() {
    return (
    <div className="aboutme">
        <ComponentHeadings heading="Студент"/>
        <div className="student">
          <div className="student__wrapper">
            <h2 className="student__name">Дастан</h2>
            <p className="student__desc">Фронтенд-разработчик, 17 лет</p>
            <p className="student__about">Я родился и живу в Уральске, Казахстан, и учусь в Назарбаев интеллектуальной школе. в свободное время я люблю смотреть аниме, писать музыку и кататься на велосипеде. После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами. </p>
            <ul className="student__links">
              <li className="student__link-wrapper"><a href="https://www.facebook.com/profile.php?id=100021879007320" rel="noreferrer" target="_blank" className="student__link">Facebook</a></li>
              <li className="student__link-wrapper"><a href="https://github.com/DeFida" rel="noreferrer" target="_blank" className="student__link">Github</a></li>
            </ul>
          </div>
          <img src={require('../../images/ddd.png').default} alt="student" className="student__image" />
        </div>
        
    </div>
  );
}

export default AboutMe;
