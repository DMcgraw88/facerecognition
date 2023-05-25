import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import 'tachyons';
import './App.css';
import './index.css';
import ParticlesBg from 'particles-bg'



function App() {
  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} />
     <Navigation />
     <Logo />
     <Rank/>
     <ImageLinkForm/>
    </div>
  );
}

export default App;