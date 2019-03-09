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
    
          rotationPeriods.sort((a, b) => {
            if(a.rotationPeriod < b.rotationPeriod) {
              return -1;
            }
            if(a.rotationPeriod > b.rotationPeriod) {
              return 1;
            }
            return 0
          })
  
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
          rotationPeriods.sort((a, b) => {
            if(b.rotationPeriod < a.rotationPeriod) {
              return -1;
            }
            if(b.rotationPeriod > a.rotationPeriod) {
              return 1;
            }
            return 0
          })
  
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
            <th><span>Orbital period</span><span></span></th>
            <th><span>Diameter</span><span></span></th>
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