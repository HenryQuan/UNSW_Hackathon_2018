import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import strings from '../../constants/language';
import { FormBox } from '../../component/common/FormBox';
import { Button } from 'react-native-elements';

class Login extends Component {
  // TODO: update to react native elements
  render() {
    return (
      <View>
        <Text>{strings.app_welcome}</Text>
        <FormBox name={strings.login_button} onChange={() => null} error={""} />
        <FormBox name={strings.password_input} onChange={() => null} error={""} />
        <Button title={strings.login_button} />
        <Button title={strings.signup_button} />
      </View>
    );
  }
}

// TODO: change to react native style -> Stylesheet.create()
const styles = StyleSheet.create({

})

export { Login };