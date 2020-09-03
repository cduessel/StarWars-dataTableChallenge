import React from 'react';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/filters/Searchbar';
import StarProvider from './context/starWarsContext';


function App() {
  return (
    <StarProvider>
      <h1>The StarWars Planets Table:</h1>
      <SearchBar />
      <Table />
      <h3>Made with Love <a href="http://www.bycd.com.br">byCD</a></h3>
    </StarProvider>
  );
}

export default App;
