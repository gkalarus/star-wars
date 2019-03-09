import React from 'react';
import PlanetTable from '../containers/PlanetTable';


const PlanetBoard = ({planetDetails, loadingPlanets, active, addedMovieDetails}) => {
  return (  
      <PlanetTable 
        addedMovieDetails={addedMovieDetails}
        planetDetails={planetDetails} 
        loadingPlanets={loadingPlanets}
        active={active}
      />
);
}

 
export default PlanetBoard;