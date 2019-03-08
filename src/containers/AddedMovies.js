import React from 'react';
import Movie from './Movie';


class AddedMovies extends React.Component {

  state = {
    addedMovies: []
  }
 

  componentDidUpdate(prevProps) {
    if(prevProps.addedMovieTitle !== this.props.addedMovieTitle) {
      console.log(this.props.addedMovieTitle)

      this.setState(prevState => {
        return {
          addedMovies: prevState.addedMovies.push(this.props.addedMovieTitle)
        }
      })
    }
  }

  render() {
    let listOfAddedMovies = null
    
    if(this.state.addedMovies.length > 0) {
      console.log(this.state.addedMovies)
      listOfAddedMovies = this.state.addedMovies.map(movie => <Movie addedMovieTitle={movie} addedPlanetsDetails={this.props.addedPlanetsDetails} />)
      console.log(this.state.addedMovies)

    }

    return <ul className="addedMovies">{listOfAddedMovies}</ul>
  }
}

export default AddedMovies;

