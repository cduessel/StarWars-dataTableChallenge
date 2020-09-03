import React, { useState, useContext } from 'react';
import { StarWarsContext } from '../../context/starWarsContext';

export function datafilterfunction(filteredPlanets, filterByValues) {
  let planets = filteredPlanets;
  for (let i = 0; i < filterByValues.length; i += 1) {
    if (filterByValues[i].comp === 'maior que') {
      planets = planets.filter((planet) =>
        Number(planet[filterByValues[i].col]) > Number(filterByValues[i].val));
    } else if (filterByValues[i].comp === 'menor que') {
      planets = planets.filter((planet) =>
        Number(planet[filterByValues[i].col]) < Number(filterByValues[i].val));
    } else if (filterByValues[i].comp === 'igual a') {
      planets = planets.filter((planet) =>
        Number(planet[filterByValues[i].col]) === Number(filterByValues[i].val));
    }
  }
  return planets;
}

const Dropfilters = () => {
  const [col, setColumn] = useState('');
  const [comp, setComparison] = useState('');
  const [val, setValue] = useState('');

  const { filterByValues, setValues } = useContext(StarWarsContext);

  const columnOptions = () => {
    const selectedFilterColumns = filterByValues.map((filter) => filter.col);
    const startColumns = [
      'coluna',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'];
    const columns = startColumns.filter((colm) => !selectedFilterColumns.includes(colm));
    return columns.map((coluna) => <option value={coluna} key={coluna}>{coluna}</option>);
  };

  const Scolumn = (event) => setColumn(event.target.value);
  const Scomp = (event) => setComparison(event.target.value);
  const Sval = (event) => setValue(event.target.value);

  return (
    <form>
      <label htmlFor="column"> Selecione a coluna:
        <select data-testid="column-filter" value={col} onChange={(event) => Scolumn(event)}>
          {columnOptions()}
        </select>
      </label>
      <label htmlFor="comparison"> Selecione a comparação:
        <select data-testid="comparison-filter" value={comp} onChange={(e) => Scomp(e)}>
          <option>selecione:</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input type="number" data-testid="value-filter" onChange={(event) => Sval(event)} />
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => { setValues([...filterByValues, { col, comp, val }]); }}
      >Filtrar</button></form>
  );
};

export default Dropfilters;
