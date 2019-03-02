import React from 'react';

const PlanetList = ({planets, handlePlanetSelection}) => {
  console.log(planets)
  let planetList = planets.map(planet => <li onClick={() => handlePlanetSelection(planet.name)} key={planet.name}>{planet.name}</li>)
  return (  
    <ul>
      {planetList}
    </ul>
  );
}
 
export default PlanetList;