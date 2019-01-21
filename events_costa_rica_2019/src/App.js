import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header/Header';
import Feature from './components/feature/Index';
import Bac from './components/bac/Index';
import Highlight from './components/highlights/Index';
import Pricing from './components/pricing/Index';
import Location from './components/location/Index';
import Footer from './components/footer/Index';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Feature/>
      <Bac/>
      <Highlight/>
      <Pricing/>
      <Location/>
      <Footer/>
     </div>
    );
  }
}

export default App;
