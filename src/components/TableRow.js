import React from 'react';

const TableRow = ({data}) => {
  return (  
    <tbody>
    <tr className="desktop">
        <td>{data.name}</td>
        <td>{data.rotation_period}</td>
        <td>{data.orbital_period}</td>
        <td>{data.diameter}</td>
        <td>{data.climate}</td>
        <td>{data.surface_water}</td>
        <td>{data.population}</td>
      </tr>
      <tr className="mobile">
        <td align="left">Planet Name</td>
        <td align="left">{data.name}</td>
      </tr>
      <tr className="mobile">
        <td align="left">Rotation period</td>
        <td align="left">{data.rotation_period}</td>
      </tr>
      <tr className="mobile">
        <td align="left">Orbital period</td>
        <td align="left">{data.orbital_period}</td>
      </tr>
      <tr className="mobile">
        <td align="left">Diameter</td>
        <td align="left">{data.diameter}</td>
      </tr>
      <tr className="mobile">
        <td align="left">Climate</td>
        <td align="left">{data.climate}</td>
      </tr>
      <tr className="mobile">
        <td align="left">Surface water</td>
        <td align="left">{data.surface_water}</td>
      </tr>
      <tr className="mobile">
        <td align="left">Population</td>
        <td align="left">{data.population}</td>
      </tr>
    </tbody>
      
  );
}
 
export default TableRow;