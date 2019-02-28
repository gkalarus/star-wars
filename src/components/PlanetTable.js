import React from 'react';
import { ClipLoader } from 'react-spinners';


const PlanetTable = ({planetDetails, loadingPlanets, active}) => {

  let planetList 
  if(planetDetails !== null) {
    planetList = planetDetails.map(planet => <tr><td>{planet.name}</td><td>{planet.rotation_period}</td><td>{planet.orbital_period}</td><td>{planet.diameter}</td><td>{planet.climate}</td><td>{planet.surface_water}</td><td>{planet.population}</td></tr>)
  }

  return (  
    <table className="planetTable">
      <thead>
        <tr>
          <th><span>Planet Name</span> <span></span></th>
          <th><span>Rotation period</span><span></span></th>
          <th><span>Orbital period</span><span></span></th>
          <th><span>Diameter</span><span></span></th>
          <th><span>Climate</span><span></span></th>
          <th><span>Surface water</span><span></span></th>
          <th><span>Population</span><span></span></th>
        </tr>
      </thead>
      <tbody>
        {loadingPlanets && active ?  <tr className="planetLoader"><td colSpan={7}><ClipLoader sizeUnit={"px"} size={50} color={'#1BA1BE'} loading={loadingPlanets} /></td></tr> :  planetList }
      </tbody>
    </table>
  )
}
 
export default PlanetTable;