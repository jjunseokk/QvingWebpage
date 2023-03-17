import React from 'react';
import './App.css';
import Header from './Components/Header';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Section6 from './Components/Section6';
import Section7 from './Components/Section7';

function App() {
  return (
    <div className="App">
      <Section1 />
       <div id='1'>
        <Section2 />
      </div>
      <div id='2'>
        <Section3 />
      </div>
      <div id='3'>
        <Section4 />
      </div>
      {/*<div id='4'>
        <Section5 />
      </div>
      <Section6 />
      <div id='5'>
        <Section7 />
      </div> */}
    </div>
  );
}

export default App;
