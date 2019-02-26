import React from 'react';
import arrowOpen from '../images/ARROWOPEN.svg';

const Movie = ({movie}) => {
  return (  
    <li className="movie">
      <p className="movieTitle">{movie.title}</p>
      <img className="arrow" src={arrowOpen} alt="open arrow"/>
    </li>
  );
}
 
export default Movie;