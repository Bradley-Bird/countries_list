import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';
import Country_Card from '../components/Country_Card';
import Dropdown from '../components/Dropdown';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState([]);
  const [continent, setContinent] = useState('All');
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountries();
      {
        const onlyContinents = [...new Set(resp.map((aContinent) => aContinent.continent))];
        console.log('resp', onlyContinents);
        setContinents(onlyContinents);
      }
      setCountries(resp);
    };
    fetchData();
  }, []);
  return (
    <>
      <select onChange={(e) => setContinent(e.target.value)}>
        {continents.map((continent) => (
          <Dropdown key={continent} {...{ continent }} />
        ))}
      </select>
      <div>
        {countries.map((country) => (
          <Country_Card key={country.id} {...country} />
        ))}
      </div>
    </>
  );
}
