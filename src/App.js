import './App.css';
import './scss/master.scss';
import logo from './images/new_logo.png';
import Home from './html/home.js';
import Personal from './html/personal.js';
import Professional from './html/professional.js';
import Aboutme from './html/aboutme.js';
import Menu from './html/menu.js';
import Menumobile from './html/menumobile.js';
import React, {useEffect, useState} from 'react';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
  })

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  if(width <= 500){
    return (
      <div>
        <Menumobile/>
      </div>
    );
  }else {
  return (
    <div className="App">
      <body>
    <Menu />
    <Home />
    <div class="background background1"></div>
    <Professional />
    <div class="background background2"></div>
    <Personal />
    <div class="background background3"></div>
    <Aboutme />
  </body>
    </div>
  );
  }
}

export default App;
