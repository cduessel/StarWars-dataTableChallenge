import React, { useEffect, useContext } from 'react';
import { StarWarsContext } from '../context/starWarsContext';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const apiUrl = 'https://swapi-trybe.herokuapp.com/api/planets/';
function FetchData() {
  return fetch(apiUrl)
    .then((response) => response.json())
    .then(
      (data) => data.results,
      (error) => { console.log(`erro: ${error.message}`); },
    );
}

const Table = () => {
  const { data, setData } = useContext(StarWarsContext);

  useEffect(() => {
    FetchData().then((dataApi) => setData(dataApi));
  }, []);

  return (
    <div>
      {!data && <h2>Error fetching data!</h2>}
      {data &&
      <table>
        <TableHeader />
        {data && <TableBody />}
      </table>
      }
    </div>
  );
};

export default Table;
