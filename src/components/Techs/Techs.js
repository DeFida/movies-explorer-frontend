import './Techs.css';
import ComponentHeadings from '../ComponentHeadings/ComponentHeadings'

function Techs() {
    return (
    <div className="techs">
        <section className="techs-section">
            <ComponentHeadings heading="Технологии"/>
            <div className="techs-section__text-wrapper">
                <h2 className="techs-section__heading">7 технологий</h2>
                <p className="techs-section__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <ul className="techsList">
                <li className="techsList__elem">HTML</li>
                <li className="techsList__elem">CSS</li>
                <li className="techsList__elem">JS</li>
                <li className="techsList__elem">React</li>
                <li className="techsList__elem">Git</li>
                <li className="techsList__elem">Express.js</li>
                <li className="techsList__elem">mongoDB</li>
            </ul>
        </section>
    </div>
  );
}

export default Techs;
