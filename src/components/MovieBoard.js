import React from 'react';
import Movie from '../containers/Movie';
import { ClipLoader } from 'react-spinners';
import uuid from 'uuid';

const MovieBoard = ({movies, loadingMovies}) => {

  let movieList


  if(movies !== null) {
    movieList = movies.map(movie => (
      <Movie key={uuid.v4()} movie={movie} />
    ))
  }

  return (  
    <ul className="movieBoard">
      {loadingMovies ? <div className="movieLoader"><ClipLoader sizeUnit={"px"} size={50} color={"#1BA1BE"} lading={loadingMovies} /></div> : movieList }
    </ul>
  );
}
 
export default MovieBoard;