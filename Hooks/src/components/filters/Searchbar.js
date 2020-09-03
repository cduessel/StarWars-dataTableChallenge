import React, { useContext } from 'react';
import FilterDisplay from './FilterDisplay';
import { StarWarsContext } from '../../context/starWarsContext';
import Dropfilters from './Dropfilters';

const SearchBar = () => {
  const { setFilterByName } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="name-filter-input"> Search planet by name:
        <input
          data-testid="name-filter"
          type="text"
          name=""
          onChange={(event) => setFilterByName({ filterByName: { name: event.target.value } })}
        />
      </label>
      <Dropfilters />
      <FilterDisplay />
    </div>
  );
};

export default SearchBar;
