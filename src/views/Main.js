import React, { useEffect } from 'react';
import { fetchCountries } from '../services/countries';

export default function Main() {
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountries();
      console.log('resp', resp);
    };
    fetchData();
  }, []);
  return <div>Main</div>;
}
