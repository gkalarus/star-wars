import React from 'react';
import PlanetList from '../components/PlanetList';
import SelectedPlanets from '../components/SelectedPlanets';


class AddForm extends React.Component {

  state = {
    movieTitle: '',
    planetName: '',
    planets: [],
    selectedPlanets: [],
    selectedPlanetsWithDetails: [],
    errors: {
      capitalLetter: false,
      movieTitleLength: false
    }
  }

  messages = {
    capitalLetter_incorrect: 'Movie title must start with a capital letter',
    movieTitleLength_incorrect: 'Movie title must be at least three letters long'
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.active !== this.props.active) {
      this.setState({
        movieTitle: '',
        planetName: '',
        planets: [],
        selectedPlanets: [],
        selectedPlanetsWithDetails: [],
        errors: {
          capitalLetter: false,
          movieTitleLength: false
        }
      })
    }

    if(prevState.selectedPlanets !== this.state.selectedPlanets) {
      if(this.state.selectedPlanets[this.state.selectedPlanets.length-1] !== undefined && this.state.selectedPlanets.length > prevState.selectedPlanets.length) {
        fetch(`https://swapi.co/api/planets?search=${this.state.selectedPlanets[this.state.selectedPlanets.length-1]}`)
        .then(response => {
          if(response.ok) {
            return response.json()
          }
          throw Error(response.status)
        })
        .then(data => {
          this.setState(prevState => {
            return {
              selectedPlanetsWithDetails: [...prevState.selectedPlanetsWithDetails, data.results]
            }
          })
        })
        .catch(error => console.log(error))
      }
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
      this.props.handleAddMovie(this.state.selectedPlanetsWithDetails, this.state.movieTitle)
      this.setState({
        movieTitle: '',
        planetName: '',
        planets: [],
        selectedPlanets: [],
        selectedPlanetsWithDetails: [],
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

  handlePlanetSelection = planetName => { 
    if(this.state.selectedPlanets.indexOf(planetName) === -1) {
      this.setState(prevState => {
        return {
          selectedPlanets: [...prevState.selectedPlanets, planetName]
        }
      })
    }
  }

  handleDeletePlanet = (e, planetName) => {
    e.preventDefault();
    const selectedPlanets = this.state.selectedPlanets.filter(planet => planet !== planetName)
    const selectedPlanetsWithDetails = this.state.selectedPlanetsWithDetails.filter(planet => planet[0].name !== planetName)
    this.setState({
      selectedPlanets,
      selectedPlanetsWithDetails
    })
  }

  render() {
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
        {this.state.selectedPlanets.length > 0 && <SelectedPlanets handleDeletePlanet={this.handleDeletePlanet} selectedPlanets={this.state.selectedPlanets}/>}
        <label htmlFor="addPlanet">Add Planet</label>
        <input type="text" id="addPlanet" name="addPlanet" placeholder="Search for the planet in database" value={this.state.planetName} onChange={this.handleSearch}/>
        {this.state.planets.length > 0 && <PlanetList handlePlanetSelection={this.handlePlanetSelection} planets={this.state.planets}/>}
        <button className="addBtn">Add movie</button>
      </form>
    )
  }
}

export default AddForm;