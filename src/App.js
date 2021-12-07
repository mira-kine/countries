import { useState, useEffect } from 'react';
import './App.css';
import { getCountries } from './services/countries';
// import Flags from './components/Flags';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Flags</h1>
      {countries.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default App;
