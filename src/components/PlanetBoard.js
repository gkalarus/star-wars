import React from 'react';
import PlanetTable from '../containers/PlanetTable';

const PlanetBoard = ({planetDetails, loadingPlanets, active}) => {
  return (  
      <PlanetTable 
        planetDetails={planetDetails} 
        loadingPlanets={loadingPlanets}
        active={active}
      />
);
}

export default PlanetBoard;