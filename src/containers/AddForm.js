import React from 'react';
import PlanetList from '../components/PlanetList';


class AddForm extends React.Component {

  state = {
    movieTitle: '',
    planetName: '',
    planets: [],
    selectedPlanets: [],
    errors: {
      capitalLetter: false,
      movieTitleLength: false
    }
  }

  messages = {
    capitalLetter_incorrect: 'Movie title must start with a capital letter',
    movieTitleLength_incorrect: 'Movie title must be at least three letters long'
  }

  componentDidUpdate(prevProps) {
    if(prevProps.active !== this.props.active) {
      this.setState({
        movieTitle: '',
        planetName: '',
        planets: [],
        selectedPlanets: [],
        errors: {
          capitalLetter: false,
          movieTitleLength: false
        }
      })
    }
  }


  handleAddMovieTitle = (e) => {
    this.setState({
      movieTitle: e.target.value
    })
  }

  formValidation = () => {
    let capitalLetter = false;
    let movieTitleLength = false;
    let correct = false;

    const initialIsCaptial = word => {
      return word[0] !== word[0].toLowerCase();
    }

    if(this.state.movieTitle && initialIsCaptial(this.state.movieTitle)) {
      capitalLetter = true;
    }

    if(this.state.movieTitle.length > 2) {
      movieTitleLength = true;
    }

    if(capitalLetter && movieTitleLength) {
      correct = true;
    }

    return({
      capitalLetter,
      movieTitleLength,
      correct
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const validation = this.formValidation();
    
    if(validation.correct) {
      this.setState({
        movieTitle: '',
        errors: {
          capitalLetter: false,
          movieTitleLength: false
        }
      })
    } else {
      this.setState({
        errors: {
          capitalLetter: !validation.capitalLetter,
          movieTitleLength: !validation.movieTitleLength
        }
      })
    }
  }

  handleSearch = (e) => {
    if(e.target.value.length !== 0) {
      fetch(`https://swapi.co/api/planets?search=${e.target.value}`)
      .then(response => {
        if(response.ok) {
          return response.json()
        }
        throw Error(response.status)
      })
      .then(data => {
        this.setState({
          planets: [...data.results]
        })
      })
      .catch(error => console.log(error))
    } else {
      this.setState({
        planets: []
      })
    }
      
    this.setState({
      planetName: e.target.value
    })
  }

  handlePlanetSelection = (planetName) => { 
    this.setState(prevState => {
      return {
        selectedPlanets: [...prevState.selectedPlanets, planetName]
      }
    })
  }

  render() {
    console.log(this.state.planets)
    let titleRed

    if(this.state.errors.capitalLetter || this.state.errors.movieTitleLength) {
      titleRed = {
        color: 'red'
      }
    }

    

    return (
      <form autoComplete="off" className="addForm" onSubmit={this.handleSubmit}>
        <label style={titleRed} htmlFor="movieTitle">Movie title</label>
        <input type="text" id="movieTitle" name="movieTitle" placeholder="Please enter the title of the movie" value={this.state.movieTitle} onChange={this.handleAddMovieTitle}/>
        {(this.state.errors.capitalLetter || this.state.errors.movieTitleLength) && <span>{this.state.errors.capitalLetter && `${this.messages.capitalLetter_incorrect}. `} {this.state.errors.movieTitleLength && `${this.messages.movieTitleLength_incorrect}.`}</span>}
        <label htmlFor="addPlanet">Add Planet</label>
        <input type="text" id="addPlanet" name="addPlanet" placeholder="Search for the planet in database" value={this.state.planetName} onChange={this.handleSearch}/>
        {this.state.planets.length > 0 && <PlanetList handlePlanetSelection={this.handlePlanetSelection} planets={this.state.planets}/>}
        <button>Add movie</button>
      </form>
    )
  }
}

export default AddForm;