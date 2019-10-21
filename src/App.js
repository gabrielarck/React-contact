import React from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactList from './components/ContactList'

function App() {
  return (
  <div>
    <Contact name="Anita" online  image="https://randomuser.me/api/portraits/women/15.jpg"/>
    <Contact name="Diana" online="" image="https://randomuser.me/api/portraits/women/54.jpg"/>
    <Contact name="Brent" online  image="https://randomuser.me/api/portraits/men/32.jpg"/>
    <div><ContactList online/></div>
  </div>
  
  );
}

export default App;
