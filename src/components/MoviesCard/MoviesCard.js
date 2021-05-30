import { useState } from 'react';
import './MoviesCard.css';


function MoviesCard(props) {
    const {card} = props;
    const [cardState, setCardState] = useState(card.cardstate);

    function handlerChangeSaveState() {
        setCardState(!cardState)
    }

    return (
    <div className="movies-card">
       <div className="movies-card__info-wrapper">
           <div className="movies-card__text-wrapper">
                <h2 className="movies-card__name">{card.name}</h2>
                <p className="movies-card__time">{card.duration}</p>
           </div>
           <button type="button" onClick={handlerChangeSaveState} className={`movies-card__savestate movies-card__savestate_${cardState}`}></button>
       </div>
       <img src={card.preview} className="movies-card__preview" alt="moviePreview" />
    </div>
  );
}

export default MoviesCard;
