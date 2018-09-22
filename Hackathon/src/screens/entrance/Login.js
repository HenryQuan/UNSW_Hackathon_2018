import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import strings from '../../constants/language';
import { FormBox } from '../../component/';
import { Button } from 'react-native-elements';

class Login extends Component {
  // TODO: update to react native elements
  render() {
    const { mainView, inputView } = styles;
    return (
      <View style={mainView}>
        <Text>{strings.app_welcome}</Text>
        <View style={inputView}>
          <FormBox name={strings.username_input} onChange={() => console.log('nothing')}/>
          <FormBox name={strings.password_input} onChange={() => console.log('nothing')}/>
        </View>
        <View>
          <Button title={strings.login_button} />
          <Button title={strings.signup_button} />
        </View>
      </View>
    );
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
