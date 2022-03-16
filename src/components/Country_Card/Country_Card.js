import React from 'react';
import './Country_Card.css';

export default function Country_Card({ name, iso2 }) {
  return (
    <div className="country">
      <p>{name}</p>
      <img src={`https://flagcdn.com/72x54/${iso2.toLowerCase()}.png`} />
    </div>
  );
}
