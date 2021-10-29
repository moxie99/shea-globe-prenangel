import React from 'react';
import Home from './pages/Home';
import SingleCar from './pages/SingleCar';
import SingleDrink from './pages/SingleDrink';
import Cars from './pages/Cars';
import Drinks from './pages/Drinks';
import Contact from './pages/Contact';
import Error from './pages/Error';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/cars" component={Cars}/>
          <Route exact path="/drinks" component={Drinks}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/cars/:slug" component={SingleCar}/>
          <Route exact path="/drinks/:drinkSlug" component={SingleDrink}/>
          <Route  component={Error}/>
      </Switch>
      <Footer />


    </>
  );
}

export default App;
