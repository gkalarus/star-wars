import React from 'react';

const PlanetList = ({planets, handlePlanetSelection}) => {
  let planetList = planets.map(planet => <li onClick={() => handlePlanetSelection(planet.name)} key={planet.name}>{planet.name}</li>)
  return (  
    <ul className="planetList">
      {planetList}
    </ul>
  );
}
 
export default PlanetList;