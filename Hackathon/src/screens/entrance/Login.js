import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import strings from '../../constants/language';
import { FormBox } from '../../component/';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class Login extends Component {
  state = {
    username: '', pass: ''
  }

  render() {
    const { mainView, inputView } = styles;
    return (
      <View style={mainView}>
        <Text>{strings.app_welcome}</Text>
        <View style={inputView}>
          <FormBox name={strings.username_input} onChange={(text) => this.setState({username: text})}/>
          <FormBox name={strings.password_input} onChange={(text) => this.setState({pass: text})}/>
        </View>
        <View>
          <Button title={strings.login_button} onPress={() => this.login()}/>
          <Button title={strings.signup_button} onPress={() => Actions.register()}/>
        </View>
      </View>
    );
  }

  /**
   * We only have 5 users, lol
   */
  login() {
    const { username, pass } = this.state;
    var isUser = false;
    user.forEach(element => {
      const { name, password } = element;
      if (username == name && pass == password) {
        Actions.map();
        isUser = true;
      }
    });
		if (!isUser) Alert.alert(strings.alert_warning, strings.login_failure);   
  }
}

// TODO: change to react native style -> Stylesheet.create()
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-around',
  },
  inputView: {
  }
})

export { Login };
