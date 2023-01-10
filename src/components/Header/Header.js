import React from 'react';
import './Header.css';
export default function Header(booger) {
  const displayText = booger.text ? booger.text : 'This is my Header';
  return <h1>{displayText}</h1>;
}
