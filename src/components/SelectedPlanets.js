import React from 'react';
import deletePlanet from '../images/deletePlanet.svg'

const SelectedPlanets = ({selectedPlanets, handleDeletePlanet}) => {

  let lis = selectedPlanets.map(planet => <li key={planet}>{planet} <button onClick={(e) => handleDeletePlanet(e, planet)}><img src={deletePlanet} alt="delete planet button"/></button></li>)

  return (  
    <ul className="selectedPlanets">{lis}</ul>
  );
}
 
export default SelectedPlanets;