import React, { Component } from 'react';
import Logo  from '../components/Logo';
import MovieBoard from '../components/MovieBoard';
import AddMovie from '../containers/AddMovie';
import AddedMovies from '../components/AddedMovies';

class App extends Component {

  state = {
    movies: null,
    loadingMovies: true,
    addedMovies: [],
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
    .then(response => {
      if(response.ok) {
        return response.json()
      }
      throw Error(response.status)
    })
    .then(data => {
      this.setState({
        movies: [...data.results],
        loadingMovies: false
      })
    })
    .catch(error => console.log(error))
  }

  handleAddMovie = (selectedPlanetsWithDetails, movieTitle) => {
    console.log(selectedPlanetsWithDetails, movieTitle)
    let planets = selectedPlanetsWithDetails;
    let movie = {}
    movie.movieTitle = movieTitle;
    movie.planets = planets.map(planet => planet[0]);
    this.setState({
      addedMovies: [...this.state.addedMovies, movie]
    })  
  }


  render() {
    console.log('add')
    return (
      <div className="app">
        <Logo />
        <MovieBoard 
          movies={this.state.movies} 
          loadingMovies={this.state.loadingMovies}
          addedMovies={this.state.addedMovies}
        />
        <AddedMovies
          addedMovies={this.state.addedMovies}
        />
        <AddMovie handleAddMovie={this.handleAddMovie} />
      </div>
    );
  }
}

export default App;
