import React from 'react';
import arrowOpen from '../images/ARROWOPEN.svg';
import arrowClose from '../images/ARROWCLOSE.svg';
import PlanetBoard from '../components/PlanetBoard';

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

class Movie extends React.Component {

  state = {
    active: false,
    loadingPlanets: true,
    movieDetails: null,
    planetDetails: [],
  }

  componentDidMount() {
    this.setState({
      movieDetails: this.props.movie
    })
  }

  componentWillUpdate() {

    if(this.state.active && this.state.movieDetails) {
      if(this.state.movieDetails.planets.length === this.state.planetDetails.length + 1) {
        this.setState({
          loadingPlanets: false
        })
      }
    }
  }

  handleCollapse = () => {

    if(!this.state.active) {
      this.setState(prevState => {
        return {
          active: !prevState.active
        }
      })

      if(this.state.movieDetails !==  undefined) {
        this.handleFetchPlanet(this.state.movieDetails.planets);
      }
      
    } else {
      this.setState(prevState => {
        return {
          active: !prevState.active,
          planetDetails: [],
          loadingPlanets: true,
        }
      })
    }
  }

  handleFetchPlanet = (apis) => {
      const apisList = apis;
      apisList.forEach(api => {
        fetch(api)
        .then(response => {
          if(response.ok) {
           return response.json()
          }
          throw Error(response.status)
        })
        .then(data => {
          this.setState(prevState => {
            return {
              planetDetails: [...prevState.planetDetails, data]
            }
          })
        })
        .catch(error => console.log(error))
      })
  }

  render() {

    return(
      <li className="movie">
        <Accordion className="acc">
          <AccordionItem>
              <AccordionItemTitle className="accItemTitle">
                <div className="headerContainer" onClick={this.handleCollapse}>
                  <p className="movieTitle">{this.props.movie && this.props.movie.title}</p>
                  <img className="arrow" src={this.state.active ? arrowClose : arrowOpen } alt="open arrow"/>
                </div>
              </AccordionItemTitle>
              <AccordionItemBody>
                <PlanetBoard 
                  planetDetails={this.state.planetDetails}
                  loadingPlanets={this.state.loadingPlanets}
                  active={this.state.active}
                />
              </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </li>
    )
  }
}
 
export default Movie;