import { useState, useEffect } from 'react';
import './App.css';
import { getCountries } from './services/countries';
// import Flags from './components/Flags';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [continent, setContinent] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
    };
    fetchData();
  }, []);

  function filterCountries() {
    return countries.filter((item) => {
      return item.name.includes(query) && (item.continent === continent || continent === 'All');
    });
  }

  return (
    <>
      <div className="App">
        <h1>Flags of the World</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <select value={continent} onChange={(e) => setContinent(e.target.value)}>
          <option value="All">All</option>
          <option value="Oceania">Oceania</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="North America">North America</option>
          <option value="Antarctica">Antarctica</option>
          <option value="South America">South America</option>
          <option value="Asia">Asia</option>
        </select>
        {filterCountries().map((country) => (
          <p key={country.i}>
            {country.name} : {country.continent}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
