import React from 'react';
import { ClipLoader } from 'react-spinners';
import TableRow from '../components/TableRow';

class PlanetTable extends React.Component {

  state = {
    planetList: [],
    planetName: {
      direction: "asc"
    },
    rotationPeriod: {
      direction: "asc"
    },
    orbitalPeriod: {
      direction: "asc"
    },
    diameter: {
      direction: "asc"
    },
    climate: {
      direction: "asc"
    },
    surfaceWater: {
      direction: "asc"
    },
    population: {
      direction: "asc"
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
  }

  handleSort = (column) => (e) => {
    if(this.state.planetList.length > 0) {
      if(column === "planetName") {
        let sortedPlanetList = [];
        let convertedPlanetList = [];
        let planetNames = this.state.planetList.map(planet => {
          return {
            planetName: planet.props.data.name,
            key: planet.key
          }
        })

        if(this.state.planetName.direction === "asc") {
    
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
              direction: "desc"
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
              direction: "asc"
            }
          })
        }
      } else if (column === "rotationPeriod") {
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

        if(this.state.rotationPeriod.direction === "asc") {
          rotationPeriods.forEach(item => isNaN(item.rotationPeriod) ? strArr.push(item) : numArr.push(item))

          numArr.sort((a, b) => a.rotationPeriod - b.rotationPeriod)
          rotationPeriods = numArr.concat(strArr);
          rotationPeriods.forEach(planet => (
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          ))

          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))
          
          this.setState({
            planetList: convertedPlanetList,
            rotationPeriod: {
              direction: "desc"
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
          
          this.setState({
            planetList: convertedPlanetList,
            rotationPeriod: {
              direction: "asc"
            }
          })
        }
      } else if (column === "orbitalPeriod") {
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

        if(this.state.orbitalPeriod.direction === "asc") {
          orbitalPeriods.forEach(item => isNaN(item.orbitalPeriod) ? strArr.push(item) : numArr.push(item))

          numArr.sort((a, b) => a.orbitalPeriod - b.orbitalPeriod)
          orbitalPeriods = numArr.concat(strArr);
          orbitalPeriods.forEach(planet => (
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          ))

          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))

          this.setState({
            planetList: convertedPlanetList,
            orbitalPeriod: {
              direction: "desc"
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

          this.setState({
            planetList: convertedPlanetList,
            orbitalPeriod: {
              direction: "asc"
            }
          })
        }
      } else if (column === "diameter") {
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

        if(this.state.diameter.direction === "asc") {
          diameters.forEach(item => isNaN(item.diameter) ? strArr.push(item) : numArr.push(item))

          numArr.sort((a, b) => a.diameter - b.diameter)
          diameters = numArr.concat(strArr);
          diameters.forEach(planet => (
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          ))

          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))

          this.setState({
            planetList: convertedPlanetList,
            diameter: {
              direction: "desc"
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

          this.setState({
            planetList: convertedPlanetList,
            diameter: {
              direction: "asc"
            }
          })
        }
      } else if (column === "climate") {
        let sortedPlanetList = [];
        let convertedPlanetList = [];
        let climates = this.state.planetList.map(planet => {
          return {
            climate: planet.props.data.climate,
            key: planet.key
          }
        })

        if(this.state.climate.direction === "asc") {
    
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
              direction: "desc"
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
              direction: "asc"
            }
          })
        }
      } else if (column === "surfaceWater") {
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

        if(this.state.surfaceWater.direction === "asc") {
          surfaceWaters.forEach(item => isNaN(item.surfaceWater) ? strArr.push(item) : numArr.push(item))

          numArr.sort((a, b) => a.surfaceWater - b.surfaceWater)
          surfaceWaters = numArr.concat(strArr);
          surfaceWaters.forEach(planet => (
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          ))

          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))

          this.setState({
            planetList: convertedPlanetList,
            surfaceWater: {
              direction: "desc"
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

          this.setState({
            planetList: convertedPlanetList,
            surfaceWater: {
              direction: "asc"
            }
          })
        }
      } else if (column === "population") {
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

        if(this.state.population.direction === "asc") {
          populations.forEach(item => isNaN(item.population) ? strArr.push(item) : numArr.push(item))

          numArr.sort((a, b) => a.population - b.population)
          populations = numArr.concat(strArr);
          populations.forEach(planet => (
            sortedPlanetList.push(this.state.planetList.filter(unsortedPlanet => unsortedPlanet.key === planet.key))
          ))

          sortedPlanetList.forEach(planet => convertedPlanetList.push(planet[0]))

          this.setState({
            planetList: convertedPlanetList,
            population: {
              direction: "desc"
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

          this.setState({
            planetList: convertedPlanetList,
            population: {
              direction: "asc"
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
            <th><div className="headerBox"><span>Planet Name</span> <div onClick={this.handleSort("planetName")} className="sortIcon"><div>&#9650;</div><div>&#9660;</div></div></div></th>
            <th><div className="headerBox"><span>Rotation period</span><div onClick={this.handleSort("rotationPeriod")} className="sortIcon"><div>&#9650;</div><div>&#9660;</div></div></div></th>
            <th><div className="headerBox"><span>Orbital period</span><div onClick={this.handleSort("orbitalPeriod")} className="sortIcon"><div>&#9650;</div><div>&#9660;</div></div></div></th>
            <th><div className="headerBox"><span>Diameter</span><div onClick={this.handleSort("diameter")} className="sortIcon"><div>&#9650;</div><div>&#9660;</div></div></div></th>
            <th><div className="headerBox"><span>Climate</span><div onClick={this.handleSort("climate")} className="sortIcon"><div>&#9650;</div><div>&#9660;</div></div></div></th>
            <th><div className="headerBox"><span>Surface water</span><div onClick={this.handleSort("surfaceWater")} className="sortIcon"><div>&#9650;</div><div>&#9660;</div></div></div></th>
            <th><div className="headerBox"><span>Population</span><div onClick={this.handleSort("population")} className="sortIcon"><div>&#9650;</div><div>&#9660;</div></div></div></th>
          </tr>
        </thead>
        {(this.props.loadingPlanets && this.props.active) &&  <tbody><tr className="planetLoader"><td colSpan={7}><ClipLoader sizeUnit={"px"} size={50} color={"#1BA1BE"} loading={this.props.loadingPlanets} /></td></tr></tbody>}
        {!this.props.loadingPlanets && this.state.planetList}
      </table>
    )
  }
}

export default PlanetTable;