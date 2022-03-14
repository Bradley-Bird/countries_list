import React from 'react';

export default function Country_Card({ name, ISO3 }) {
  return (
    <div className="country">
      <p>{name}</p>
      <img src={ISO3}></img>
    </div>
  );
}
