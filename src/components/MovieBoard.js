import React from 'react';
import Movie from '../containers/Movie';
import { ClipLoader } from 'react-spinners';

const MovieBoard = ({movies, loadingMovies, addedMovies}) => {

  let movieList
  let movieBoardStyles = {
    borderBottom: '2px dashed #fff',
    marginBottom: '32px',
    paddingBottom: '16px'
  }

  if(movies !== null) {
    movieList = movies.map(movie => (
      <Movie key={movie.episode_id} movie={movie} />
    ))
  }

  if(addedMovies.length > 0) {
    movieBoardStyles = null
  }

  return (  
    <ul style={movieBoardStyles} className="movieBoard">
      {loadingMovies ? <div className="movieLoader"><ClipLoader sizeUnit={"px"} size={50} color={'#1BA1BE'} lading={loadingMovies} /></div> : movieList }
    </ul>
  );
}
 
export default MovieBoard;