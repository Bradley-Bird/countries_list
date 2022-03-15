import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';
import Country_Card from '../components/Country_Card';
import Dropdown from '../components/Dropdown';
import './Main.css';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState([]);
  const [continent, setContinent] = useState('All');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountries();
      {
        try {
          // I realized after doing all the research for this that it was totally unnecessary since we only have 7 things to choose from
          //make an array with the continents only once
          const onlyContinents = [...new Set(resp.map((aContinent) => aContinent.continent))];
          //filter out the null values and add All to the start
          const filteredContinents = onlyContinents.filter(Boolean);
          filteredContinents.unshift('All');
          setContinents(filteredContinents);
          setLoading(false);
        } catch (e) {
          setErrorMessage('An error has occurred, please reload the page. ');
        }
      }
      setCountries(resp);
    };
    fetchData();
  }, []);

  //filter countries by continent
  const filterCountries = () => {
    return countries.filter((country) => country.continent === continent || continent === 'All');
  };
  //if loading = true then display loader
  if (loading)
    return (
      <div>
        <span className="loader"></span>
      </div>
    );

  return (
    <>
      <select onChange={(e) => setContinent(e.target.value)}>
        {continents.map((continent) => (
          <Dropdown key={continent} {...{ continent }} />
        ))}
      </select>
      <div>
        <p>{errorMessage}</p>
        {filterCountries().map((country) => (
          <Country_Card key={country.id} {...country} />
        ))}
      </div>
    </>
  );
}
