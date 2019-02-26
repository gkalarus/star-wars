import React from 'react';
import Movie from '../components/Movie'
import { ClipLoader } from 'react-spinners';

const MovieBoard = ({movies, loadingMovies}) => {

  let movieList

  if(movies !== null) {
    movieList = movies.map(movie => (
      <Movie movie={movie} />
    ))
  }

  return (  
    <ul className="movieBoard">
      {loadingMovies ? <div className="movieLoader"><ClipLoader sizeUnit={"px"} size={50} color={'#1BA1BE'} lading={loadingMovies} /></div> : movieList }
    </ul>
  );
}
 
export default MovieBoard;