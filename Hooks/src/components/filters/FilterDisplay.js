import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/starWarsContext';

const FilterDisplay = () => {
  const { filterByValues, setValues } = useContext(StarWarsContext);

  const removeThisFilter = (filterCol) => {
    const newFilters = filterByValues.filter(
      ({ col }) => col !== filterCol,
    );
    setValues(newFilters);
  };
  if (filterByValues.length > 0) {
    return (
      <div>
        <h2>Active filters:</h2>
        {filterByValues.map((filtro) => (
          <div key={filtro.col} data-testid="filter">
            <button type="button" onClick={() => removeThisFilter(filtro.col)}>X</button>
            <ul>
              <li>{filtro.col}</li>
              <li>{filtro.comp}</li>
              <li>{filtro.val}</li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default FilterDisplay;
