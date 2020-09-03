import React, { useContext } from 'react';
import { StarWarsContext } from '../context/starWarsContext';
import { datafilterfunction } from '../components/filters/Dropfilters';

const TableBody = () => {
  const { data, nameFilter, filterByValues } = useContext(StarWarsContext);
  const NameFilteredPlanets = data.filter((planets) => planets.name.includes(nameFilter.name));

  return (
    ((filterByValues.length > 0)
    ? (datafilterfunction(NameFilteredPlanets, filterByValues))
    : NameFilteredPlanets)
      .map((planet) => (
        <tbody key={planet.name}>
          <tr>
            <td >{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        </tbody>
      ))
  );
};

export default TableBody;
