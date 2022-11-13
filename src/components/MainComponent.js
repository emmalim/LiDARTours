import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Application from './ApplicationComponent'
import Process from './ProcessComponent'
import Demo from './DemoComponent'
import {Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
  constructor(props) {
    super(props);
      }



render() {


    return (
    <div>
      <Header />
      <Switch>
        <Route path='/home' component={Home} />
        <Route exact path='/application' component={Application} />
        <Route path='/process' component={Process} />
        <Route path='/demo' component={Demo} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}
}

export default Main;
