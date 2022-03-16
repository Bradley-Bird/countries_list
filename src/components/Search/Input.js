import React from 'react';
import './Input.css';

export default function Input({ searchBar, callback }) {
  return (
    <input
      type={'text'}
      placeholder={'Search By Name'}
      value={searchBar}
      onChange={(e) => callback(e.target.value)}
    ></input>
  );
}
