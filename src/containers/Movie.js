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
    counter: 0
  }

  componentDidMount() {
    this.setState({
      movieDetails: this.props.movie
    })
  }

  handleCollapse = () => {

    if(this.state.counter % 2 === 0) {
      this.setState(prevState => {
        return {
          counter: prevState.counter + 1,
          active: true,
        }
      })

      if(!this.state.active) {
        const planetDetails = this.handleFetchPlanet(this.state.movieDetails.planets);
        this.setState({
          planetDetails,
          loadingPlanets: true
        })
  
        setTimeout( () => {
          this.setState( prevState => ({
            loadingPlanets: false,
          }));
        }, 3000);
      }

    } else {
      this.setState(prevState => {
        return {
          counter: prevState.counter + 1,
          active: false
        }
      })

      if(this.state.active) {
        const planetDetails = this.handleFetchPlanet(this.state.movieDetails.planets);
        this.setState({
          planetDetails,
          loadingPlanets: true
        })
  
        setTimeout( () => {
          this.setState( prevState => ({
            loadingPlanets: false,
          }));
        }, 5000);
      }
    }
  }

  handleFetchPlanet = (apis) => {
      const apisList = apis;
      let planetDetails = [];
      apisList.forEach(api => {
        fetch(api)
        .then(response => response.json())
        .then(data => {
          planetDetails.push(data)
        })
      })
      return planetDetails
  }

  render() {
    console.log(this.state.movieDetails)

    const headerStyle = {
      backgroundColor: '#fff',
      minHeight: '48px',
      padding: '0',
      width: '100%',
      userSelect: 'none'
    }
  
    const headerElem = {
      minHeight: '48px',
      padding: '0'
    }
    
    const activeMargin = {
      marginBottom: '16px',
    }

  

    return(
      <li style={this.state.active ? activeMargin : null} className="movie">
        <Accordion style={headerStyle}>
        <AccordionItem>
            <AccordionItemTitle style={headerElem}>
              <div className="headerContainer" onClick={this.handleCollapse}>
                <p className="movieTitle">{this.props.movie.title}</p>
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