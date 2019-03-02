import React from 'react';
import { ClipLoader } from 'react-spinners';
import TableRow from '../components/TableRow';


const PlanetTable = ({planetDetails, loadingPlanets, active}) => {
  let planetList 
  if(planetDetails !== null) {
    console.log(planetDetails)
    planetList = planetDetails.map((planet, index) => <TableRow key={index} data={planet} />)
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
          {loadingPlanets && active ?  <tbody><tr className="planetLoader"><td colSpan={7}><ClipLoader sizeUnit={"px"} size={50} color={'#1BA1BE'} loading={loadingPlanets} /></td></tr></tbody> :  planetList }
    </table>
  )
}
 
export default PlanetTable;