import React from 'react';
import Movie from '../containers/Movie';

const AddedMovies = ({addedMovies}) => {

  if(addedMovies.length > 0) {
    console.log('hello')
    let listOfMovies = addedMovies.map(movie => <Movie key={movie.movieTitle} addedMovieDetails={movie}></Movie>)
    return (  
      <ul className="addedMovies">{listOfMovies}</ul>
    );
  }else {
    return null
  }


}
 
export default AddedMovies;