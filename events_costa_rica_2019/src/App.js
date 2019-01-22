import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header/Header';
import Feature from './components/feature/Index';
import Bac from './components/bac/Index';
import Highlight from './components/highlights/Index';
import Pricing from './components/pricing/Index';
import Location from './components/location/Index';
import Footer from './components/footer/Index';
import { Element } from 'react-scroll';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Element name='Events start in'>
        <Feature/>
      </Element>
      <Element name='Moments BAC'>
        <Bac/>
      </Element>
      <Element name='HighLights'>
        <Highlight/>
      </Element>
      <Element name='Princing'>
       <Pricing/>
      </Element>
      <Element name='Location'>
        <Location/>
      </Element>
      <Footer/>
     </div>
    );
  }
}

export default App;
