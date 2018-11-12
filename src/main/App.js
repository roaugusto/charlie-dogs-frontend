import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'

import Footer from '../components/Footer'
import Header from '../components/Header'
import AnimalList from '../components/Animal/AnimalList'
import AnimalStore from '../components/Animal/AnimalStore'
import Cart from '../components/Cart/Cart'

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={AnimalList} />
            <Route path='/filhotes' component={AnimalList} />
            <Route path='/insertAnimal' component={AnimalStore} />
            <Route path='/cart' component={Cart} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
