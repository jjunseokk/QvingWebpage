import React, { useState } from 'react';
import './App.scss';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Section6 from './Components/Section6';
import Section7 from './Components/Section7';



import kakao from './Asset/Image/kakao.png';
import call from './Asset/Image/call.png';
import AppDown from './Components/AppDown';


function App() {

  const [showMobile, setShowMobile] = useState(false);


  window.addEventListener('scroll', function () {
    let windowY = window.scrollY;

    if (windowY > 2000) {
      setShowMobile(true);
    } else {
      setShowMobile(false);
    }
  });

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
      <div id='4'>
        <Section5 />
      </div>
      <Section6 />
      <AppDown />
      <div id='5'>
        <Section7 />
      </div>
      <div className={showMobile ? "mobile_inquiry mobile_is_active" : "mobile_inquiry mobile_is_not_active"}>
        <a href="https://pf.kakao.com/_xnGFTT"><img src={kakao} alt=""></img></a>
        <a href="tel:0220705009"><img src={call} alt=""></img></a>
      </div>
    </div>
  );
}

export default App;
