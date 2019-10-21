import React from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactList from './components/ContactList'

function App() {
  return (
  <div>
    <Contact name="Anita"  image="https://randomuser.me/api/portraits/women/15.jpg"/>
    <Contact name="Diana"  image="https://randomuser.me/api/portraits/women/54.jpg"/>
    <Contact name="Brent"  image="https://randomuser.me/api/portraits/men/32.jpg"/>
    <ContactList online/>
  </div>
  
  );
}

export default App;
