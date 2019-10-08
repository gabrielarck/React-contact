import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
  <div>
    <Contact name="Anita" online  image="https://randomuser.me/api/portraits/women/15.jpg"/>
    <Contact name="Diana" online="" image="https://randomuser.me/api/portraits/women/54.jpg"/>
    <Contact name="Brent" online  image="https://randomuser.me/api/portraits/men/32.jpg"/>
  </div>
  );
}

export default App;
