import React, { Component } from 'react';
import Logo  from '../components/Logo';
import MovieBoard from '../components/MovieBoard';
import AddMovie from '../components/AddMovie';

class App extends Component {

  state = {
    movies: null,
    loadingMovies: true
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
    .then(response => response.json())
    .then(data => {
      this.setState({
        movies: [...data.results],
        loadingMovies: false
      })
    })
  }


  render() {
    return (
      <div className="app">
        <Logo />
        <MovieBoard 
          movies={this.state.movies} 
          loadingMovies={this.state.loadingMovies}
        />
        <AddMovie />
      </div>
    );
  }
}

export default App;
