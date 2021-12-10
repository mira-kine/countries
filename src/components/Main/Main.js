import React from 'react';
import { getCountries } from '../../services/countries';
import { useState, useEffect } from 'react';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [continent, setContinent] = useState('All');
  const [sort, setSort] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer;
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
      timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    if (loading) {
      fetchData();
    }
    return () => {
      clearInterval(timer);
    };
  }, [loading]);

  // when filtered, sort alphabetically using .sort
  function filterCountries() {
    return countries.filter((item) => {
      return (
        item.name.toLowerCase().includes(query) &&
        (item.continent === continent || continent === 'All')
      );
    });
  }

  return (
    <>
      <div className="App">
        <h1>Flags of the World</h1>
        <input
          placeholder="Search here"
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
        <button value={sort} onClick={() => setSort((prevState) => !prevState)}>
          sort A-Z
        </button>
        <span className="loader"></span>
        <div className="flags">
          {filterCountries().map((country) => (
            <div key={country.id}>
              <div>
                {country.name} : {country.continent}
              </div>
              <div>
                <img src={`https://flagcdn.com/84x63/${country.iso2.toLowerCase()}.png`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
