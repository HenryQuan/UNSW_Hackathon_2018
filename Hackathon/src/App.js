import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Test, Login } from './screens';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="entrance" hideNavBar>
            <Scene key="login" component={Login}/>
            <Scene key="test" component={Test} initial/>
          </Scene>
          <Scene key="main">
            <Scene key="test" component={Test}/>
          </Scene>
        </Scene>
      </Router>
    );
  }
}