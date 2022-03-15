import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';
import Country_Card from '../components/Country_Card';
import Dropdown from '../components/Dropdown';

export default function Main() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountries();
      console.log('resp', resp);
      setCountries(resp);
    };
    fetchData();
  }, []);
  return (
    <>
      <select>
        {countries.map((country) => (
          <Dropdown key={country.id} {...country} />
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
