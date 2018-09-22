import React, { Component } from 'react';
import { Login, NeabyStore, Register } from './screens';
import { Router, Scene } from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="entrance" hideNavBar>
            <Scene key="login" component={Login}/>
            <Scene key="register" component={Register}/>
          </Scene>
          <Scene key="main">
            <Scene key="nearby" component={LogNeabyStorein}/>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

