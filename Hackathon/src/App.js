import React, { Component } from 'react';
import { Login, NeabyStore, Register } from './screens';
import { Router, Scene } from 'react-native-router-flux';
import strings from './constants/language';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="entrance">
            <Scene key="login" component={Login} hideNavBar/>
            <Scene key="register" component={Register} title={strings.register_title}/>
          </Scene>
          <Scene key="main">
            <Scene key="nearby" component={NeabyStore}/>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

