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
    },
    climate: {
      direction: 'asc'
    },
    surfaceWater: {
      direction: 'asc'
    },
    population: {
      direction: 'asc'
    },
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
        let strArr = [];
        let numArr = [];
        let sortedPlanetList = [];
        let convertedPlanetList = [];
        let rotationPeriods = this.state.planetList.map(planet => {
          return {
            rotationPeriod: planet.props.data.rotation_period,
            key: planet.key
          }
        })

        if(this.state.rotationPeriod.direction === 'asc') {
          rotationPeriods.forEach(item => isNaN(item.rotationPeriod) ? strArr.push(item) : numArr.push(item))

          numArr.sort((a, b) => a.rotationPeriod - b.rotationPeriod)
          rotationPeriods = numArr.concat(strArr);
          rotationPeriods.forEach(planet => (
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          ))

          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))

          console.log(convertedPlanetList)
          
          this.setState({
            planetList: convertedPlanetList,
            rotationPeriod: {
              direction: 'desc'
            }
          })

        } else {
          rotationPeriods.forEach(item => isNaN(item.rotationPeriod) ? strArr.push(item) : numArr.push(item))

          numArr.sort((a, b) => b.rotationPeriod - a.rotationPeriod)
          rotationPeriods = strArr.concat(numArr);
          rotationPeriods.forEach(planet => (
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          ))

          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))

          console.log(convertedPlanetList)
          
          this.setState({
            planetList: convertedPlanetList,
            rotationPeriod: {
              direction: 'asc'
            }
          })
        }
      } else if (column === 'orbitalPeriod') {
        let strArr = [];
        let numArr = [];
        let sortedPlanetList = [];
        let convertedPlanetList = [];
        let orbitalPeriods = this.state.planetList.map(planet => {
          return {
            orbitalPeriod: planet.props.data.orbital_period,
            key: planet.key
          }
        })

        if(this.state.orbitalPeriod.direction === 'asc') {
          orbitalPeriods.forEach(item => isNaN(item.orbitalPeriod) ? strArr.push(item) : numArr.push(item))

          numArr.sort((a, b) => a.orbitalPeriod - b.orbitalPeriod)
          orbitalPeriods = numArr.concat(strArr);
          orbitalPeriods.forEach(planet => (
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          ))

          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))

          console.log(convertedPlanetList)
          
          this.setState({
            planetList: convertedPlanetList,
            orbitalPeriod: {
              direction: 'desc'
            }
          })

        } else {
          orbitalPeriods.forEach(item => isNaN(item.orbitalPeriod) ? strArr.push(item) : numArr.push(item))

          numArr.sort((a, b) => b.orbitalPeriod - a.orbitalPeriod)
          orbitalPeriods = strArr.concat(numArr);
          orbitalPeriods.forEach(planet => (
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          ))

          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))

          console.log(convertedPlanetList)
          
          this.setState({
            planetList: convertedPlanetList,
            orbitalPeriod: {
              direction: 'asc'
            }
          })
        }
      } else if (column === 'diameter') {
        let strArr = [];
        let numArr = [];
        let sortedPlanetList = [];
        let convertedPlanetList = [];
        let diameters = this.state.planetList.map(planet => {
          return {
            diameter: planet.props.data.diameter,
            key: planet.key
          }
        })

        if(this.state.diameter.direction === 'asc') {
          diameters.forEach(item => isNaN(item.diameter) ? strArr.push(item) : numArr.push(item))

          numArr.sort((a, b) => a.diameter - b.diameter)
          diameters = numArr.concat(strArr);
          diameters.forEach(planet => (
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          ))

          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))

          console.log(convertedPlanetList)
          
          this.setState({
            planetList: convertedPlanetList,
            diameter: {
              direction: 'desc'
            }
          })

        } else {
          diameters.forEach(item => isNaN(item.diameter) ? strArr.push(item) : numArr.push(item))

          numArr.sort((a, b) => b.diameter - a.diameter)
          diameters = strArr.concat(numArr);
          diameters.forEach(planet => (
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          ))

          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))

          console.log(convertedPlanetList)
          
          this.setState({
            planetList: convertedPlanetList,
            diameter: {
              direction: 'asc'
            }
          })
        }
      } else if (column === 'climate') {
        let sortedPlanetList = [];
        let convertedPlanetList = [];
        let climates = this.state.planetList.map(planet => {
          return {
            climate: planet.props.data.climate,
            key: planet.key
          }
        })

        if(this.state.climate.direction === 'asc') {
    
          climates.sort((a, b) => {
            if(a.climate < b.climate) {
              return -1;
            }
            if(a.climate > b.climate) {
              return 1;
            }
            return 0
          })
  
          climates.forEach(planet => {
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          })
  
          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))
          
          this.setState({
            planetList: convertedPlanetList,
            climate: {
              direction: 'desc'
            }
          })
        } else {
          climates.sort((a, b) => {
            if(b.climate < a.climate) {
              return -1;
            }
            if(b.climate > a.climate) {
              return 1;
            }
            return 0
          })
  
          climates.forEach(planet => {
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          })
  
          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))
          
          this.setState({
            planetList: convertedPlanetList,
            climate: {
              direction: 'asc'
            }
          })
        }
      } else if (column === 'surfaceWater') {
        let strArr = [];
        let numArr = [];
        let sortedPlanetList = [];
        let convertedPlanetList = [];
        let surfaceWaters = this.state.planetList.map(planet => {
          return {
            surfaceWater: planet.props.data.surface_water,
            key: planet.key
          }
        })

        if(this.state.surfaceWater.direction === 'asc') {
          surfaceWaters.forEach(item => isNaN(item.surfaceWater) ? strArr.push(item) : numArr.push(item))

          numArr.sort((a, b) => a.surfaceWater - b.surfaceWater)
          surfaceWaters = numArr.concat(strArr);
          surfaceWaters.forEach(planet => (
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          ))

          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))

          console.log(convertedPlanetList)
          
          this.setState({
            planetList: convertedPlanetList,
            surfaceWater: {
              direction: 'desc'
            }
          })

        } else {
          surfaceWaters.forEach(item => isNaN(item.surfaceWater) ? strArr.push(item) : numArr.push(item))

          numArr.sort((a, b) => b.surfaceWater - a.surfaceWater)
          surfaceWaters = strArr.concat(numArr);
          surfaceWaters.forEach(planet => (
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          ))

          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))

          console.log(convertedPlanetList)
          
          this.setState({
            planetList: convertedPlanetList,
            surfaceWater: {
              direction: 'asc'
            }
          })
        }
      } else if (column === 'population') {
        let strArr = [];
        let numArr = [];
        let sortedPlanetList = [];
        let convertedPlanetList = [];
        let populations = this.state.planetList.map(planet => {
          return {
            population: planet.props.data.population,
            key: planet.key
          }
        })

        if(this.state.population.direction === 'asc') {
          populations.forEach(item => isNaN(item.population) ? strArr.push(item) : numArr.push(item))

          numArr.sort((a, b) => a.population - b.population)
          populations = numArr.concat(strArr);
          populations.forEach(planet => (
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          ))

          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))

          console.log(convertedPlanetList)
          
          this.setState({
            planetList: convertedPlanetList,
            population: {
              direction: 'desc'
            }
          })

        } else {
          populations.forEach(item => isNaN(item.population) ? strArr.push(item) : numArr.push(item))

          numArr.sort((a, b) => b.population - a.population)
          populations = strArr.concat(numArr);
          populations.forEach(planet => (
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          ))

          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))

          console.log(convertedPlanetList)
          
          this.setState({
            planetList: convertedPlanetList,
            population: {
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
            <th onClick={this.handleSort('climate')}><span>Climate</span><span></span></th>
            <th onClick={this.handleSort('surfaceWater')}><span>Surface water</span><span></span></th>
            <th onClick={this.handleSort('population')}><span>Population</span><span></span></th>
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