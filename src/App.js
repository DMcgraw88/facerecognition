import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import 'tachyons';
import './App.css';
import './index.css';
import Particles from "react-particles";


function App() {
  return (
    <div className="App">
     <Navigation />
     <Logo />
     <Rank/>
     <ImageLinkForm/>
    </div>
  );
}

export default App;