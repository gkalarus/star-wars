import React from 'react';
import { ClipLoader } from 'react-spinners';
import TableRow from '../components/TableRow';

class PlanetTable extends React.Component {

  state = {
    planetList: [],
    addedPlanetList: [],
    planetName: {
      direction: 'asc'
    },
    rotationPeriod: {
      direction: 'asc'
    },
    orbitalPeriod: {
      direction: 'asc'
    },
    diameter: {
      direction: 'asc'
    }
  }

  componentDidUpdate(prevProps) {
  
    if(prevProps.planetDetails !== this.props.planetDetails) {
      let planetList;
      planetList = this.props.planetDetails.map((planet, index) => <TableRow key={index} data={planet} />)
      this.setState(prevState => {
        return {
          planetList: [...planetList],
        }
      })
    }
  
    if((this.props.addedMovieDetails[0] !== undefined)) {
      if(this.state.addedPlanetList.length === 0) {
        let addedPlanetList;
        addedPlanetList = this.props.addedMovieDetails[0].planets.map((planet, index) => <TableRow key={index} data={planet} />);
        console.log(addedPlanetList)
        this.setState(prevState => {
          return {
            addedPlanetList: [...addedPlanetList],
          }
        })
      }
    }
  }

  handleSort = (column) => (e) => {
    if(this.state.planetList.length > 0) {
      if(column === 'planetName') {
        let sortedPlanetList = [];
        let convertedPlanetList = [];
        let planetNames = this.state.planetList.map(planet => {
          return {
            planetName: planet.props.data.name,
            key: planet.key
          }
        })

        if(this.state.planetName.direction === 'asc') {
    
          planetNames.sort((a, b) => {
            if(a.planetName < b.planetName) {
              return -1;
            }
            if(a.planetName > b.planetName) {
              return 1;
            }
            return 0
          })
  
          planetNames.forEach(planet => {
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          })
  
          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))
          
          this.setState({
            planetList: convertedPlanetList,
            planetName: {
              direction: 'desc'
            }
          })
        } else {
          planetNames.sort((a, b) => {
            if(b.planetName < a.planetName) {
              return -1;
            }
            if(b.planetName > a.planetName) {
              return 1;
            }
            return 0
          })
  
          planetNames.forEach(planet => {
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          })
  
          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))
          
          this.setState({
            planetList: convertedPlanetList,
            planetName: {
              direction: 'asc'
            }
          })
        }

      } else if (column === 'rotationPeriod') {
        let sortedPlanetList = [];
        let convertedPlanetList = [];
        let rotationPeriods = this.state.planetList.map(planet => {
          return {
            rotationPeriod: planet.props.data.rotation_period,
            key: planet.key
          }
        })

        if(this.state.rotationPeriod.direction === 'asc') {
    
          rotationPeriods.sort((a, b) => a.rotationPeriod - b.rotationPeriod)
  
          rotationPeriods.forEach(planet => {
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          })
  
          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))
          
          this.setState({
            planetList: convertedPlanetList,
            rotationPeriod: {
              direction: 'desc'
            }
          })
        } else {
          rotationPeriods.sort((a, b) => b.rotationPeriod - a.rotationPeriod)
  
          rotationPeriods.forEach(planet => {
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          })
  
          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))
          
          this.setState({
            planetList: convertedPlanetList,
            rotationPeriod: {
              direction: 'asc'
            }
          })
        }
      } else if (column === 'orbitalPeriod') {
        let sortedPlanetList = [];
        let convertedPlanetList = [];
        let orbitalPeriods = this.state.planetList.map(planet => {
          return {
            orbitalPeriod: planet.props.data.orbital_period,
            key: planet.key
          }
        })

        if(this.state.orbitalPeriod.direction === 'asc') {
    
          orbitalPeriods.sort((a, b) => a.orbitalPeriod - b.orbitalPeriod)
  
          orbitalPeriods.forEach(planet => {
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          })
  
          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))
          
          this.setState({
            planetList: convertedPlanetList,
            orbitalPeriod: {
              direction: 'desc'
            }
          })
        } else {
          orbitalPeriods.sort((a, b) => b.orbitalPeriod - a.orbitalPeriod)
  
          orbitalPeriods.forEach(planet => {
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          })
  
          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))
          
          this.setState({
            planetList: convertedPlanetList,
            orbitalPeriod: {
              direction: 'asc'
            }
          })
        }
      } else if (column === 'diameter') {
        let sortedPlanetList = [];
        let convertedPlanetList = [];
        let diameters = this.state.planetList.map(planet => {
          return {
            diameter: planet.props.data.diameter,
            key: planet.key
          }
        })

        if(this.state.diameter.direction === 'asc') {
    
          diameters.sort((a, b) => a.diameter - b.diameter)
  
          diameters.forEach(planet => {
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          })
  
          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))
          
          this.setState({
            planetList: convertedPlanetList,
            diameter: {
              direction: 'desc'
            }
          })
        } else {
          diameters.sort((a, b) => b.diameter - a.diameter)
  
          diameters.forEach(planet => {
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          })
  
          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))
          
          this.setState({
            planetList: convertedPlanetList,
            diameter: {
              direction: 'asc'
            }
          })
        }
      }
    }
  };

  render() {

    return(
      <table className="planetTable">
        <thead>
          <tr>
            <th onClick={this.handleSort('planetName')}><span>Planet Name</span> <span></span></th>
            <th onClick={this.handleSort('rotationPeriod')}><span>Rotation period</span><span></span></th>
            <th onClick={this.handleSort('orbitalPeriod')}><span>Orbital period</span><span></span></th>
            <th onClick={this.handleSort('diameter')}><span>Diameter</span><span></span></th>
            <th><span>Climate</span><span></span></th>
            <th><span>Surface water</span><span></span></th>
            <th><span>Population</span><span></span></th>
          </tr>
        </thead>
        {(this.props.loadingPlanets && this.props.active && this.props.addedMovieDetails[0] === undefined) &&  <tbody><tr className="planetLoader"><td colSpan={7}><ClipLoader sizeUnit={"px"} size={50} color={'#1BA1BE'} loading={this.props.loadingPlanets} /></td></tr></tbody>}
        {!this.props.loadingPlanets && this.state.planetList}
        {this.props.addedMovieDetails[0] !== undefined && this.state.addedPlanetList}
      </table>
    )
  }
}

export default PlanetTable;