import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';
import Country_Card from '../components/Country_Card';

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
    <div>
      {countries.map((country) => (
        <Country_Card key={country.id} {...country} />
      ))}
    </div>
  );
}
