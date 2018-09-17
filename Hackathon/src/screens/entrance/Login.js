import React, {Component} from 'react';
import {View, TextInput, Text, Button} from 'react-native-ui-lib';
import {Typography, Colors} from 'react-native-ui-lib';
import { loginTheme } from '../../constants/colour';
import strings from '../../constants/language';

class Login extends Component {
  // TODO: update to react native elements
  render() {
    return (
      <View flex paddingH-25 paddingT-80 bg-bgGrey>
        <Text text20 white>{strings.app_welcome}</Text>
        <View marginT-40>
        <TextInput
            text50 
            placeholder={strings.username_input}
            floatingPlaceholder
            floatingPlaceholderColor={{
              default:'white',
              error:'red',
              focus:'#E0E0E0'
            }}
            underlineColor={{
              default:'white',
              error:'red',
              focus:'#E0E0E0'
            }}
            labelGrey
        />
        <TextInput 
            text50 
            placeholder={strings.password_input}
            floatingPlaceholder 
            floatingPlaceholderColor={{
              default:'white',
              error:'red',
              focus:'#E0E0E0'
            }}
            underlineColor={{
              default:'white',
              error:'red',
              focus:'#E0E0E0'
            }}
            secureTextEntry 
            labelGrey
        />
        </View>
        <View marginT-100>
          <Button text50 white background-buttonBgGrey label={strings.login_button}/>
          <Button link text60 buttonBgGrey label={strings.signup_button} marginT-20/>
        </View>
      </View>
    );
  }
}

// TODO: change to react native style -> Stylesheet.create()
Colors.loadColors(loginTheme);

export { Login };