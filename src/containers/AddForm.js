import React from 'react';


class AddForm extends React.Component {
  render() {
    return (
      <form className="addForm">
        <label htmlFor="movieTitle">Movie title</label>
        <input type="text" id="movieTitle" name="movieTitle" placeholder="Please enter the title of the movie"/>
        <label htmlFor="addPlanet">Add Planet</label>
        <input type="text" id="addPlanet" name="addPlanet" placeholder="Search for the planet in database"/>
        <button>Add movie</button>
      </form>
    )
  }
}

export default AddForm;