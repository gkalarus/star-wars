import React from 'react';
import arrowOpen from '../images/ARROWOPEN.svg';
import arrowClose from '../images/ARROWCLOSE.svg';
import PlanetBoard from '../components/PlanetBoard';
import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel
} from 'react-accordion-with-header';


class Movie extends React.Component {

  state = {
    active: false
  }

  handleCollapse = () => {
    this.setState(prevState => {
      return {
        active: !prevState.active
      }
    })
  }

  render() {

    const headerStyle = {
      backgroundColor: '#fff',
      minHeight: '48px',
      width: '100%',
      borderRadius: '4px',
      userSelect: 'none'
    }
  
    const headerElem = {
      minHeight: '48px'
    }
    
    const activeMargin = {
      marginBottom: '16px',
    }

    return(
      <li style={this.state.active ? activeMargin : null} className="movie">
        <AccordionWithHeader style={headerStyle}>
          <AccordionNode>
            <AccordionHeader 
              style={headerElem}
            >
              <div className="headerContainer" onClick={this.handleCollapse}>
                <p className="movieTitle">{this.props.movie.title}</p>
                <img className="arrow" src={this.state.active ? arrowClose : arrowOpen } alt="open arrow"/>
              </div>
            </AccordionHeader>
            <AccordionPanel>
              <PlanetBoard />
            </AccordionPanel>
          </AccordionNode>
        </AccordionWithHeader>
      </li>
    )
  }
}
 
export default Movie;