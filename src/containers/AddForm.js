import React from 'react';


class AddForm extends React.Component {

  state = {
    movieTitle: '',
    errors: {
      capitalLetter: false,
      movieTitleLength: false
    }
  }

  messages = {
    capitalLetter_incorrect: 'Movie title must start with a capital letter',
    movieTitleLength_incorrect: 'Movie title must be at least three letters long'
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

  render() {
    return (
      <form className="addForm" onSubmit={this.handleSubmit}>
        <label htmlFor="movieTitle">Movie title</label>
        <input type="text" id="movieTitle" name="movieTitle" placeholder="Please enter the title of the movie" value={this.state.movieTitle} onChange={this.handleAddMovieTitle}/>
        {(this.state.errors.capitalLetter || this.state.errors.movieTitleLength) && <span>{this.state.errors.capitalLetter && `${this.messages.capitalLetter_incorrect}. `} {this.state.errors.movieTitleLength && `${this.messages.movieTitleLength_incorrect}.`}</span>}
        <label htmlFor="addPlanet">Add Planet</label>
        <input type="text" id="addPlanet" name="addPlanet" placeholder="Search for the planet in database"/>
        <button>Add movie</button>
      </form>
    )
  }
}

export default AddForm;