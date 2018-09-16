import React, {Component} from 'react';
import {View, TextInput, Text, Button} from 'react-native-ui-lib';
import {Typography, Colors} from 'react-native-ui-lib';

class Login extends Component {
  render() {
    return (
      <View flex paddingH-25 paddingT-80 bg-bgGrey>
        <Text text20 white>Welcome to StorageTrick</Text>
        <View marginT-40>
        <TextInput
            text50 
            placeholder="username" 
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
            placeholder="password" 
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
        <View marginT-100 center>
          <Button text50 white background-buttonBgGrey label="Login"/>
          <Button link text60 buttonBgGrey label="Sign Up" marginT-20/>
        </View>
      </View>
    );
  }
}

Colors.loadColors({
    bgGrey: '#3C3C3C',
    labelGrey: '#C9C9C9',
    deepPurple: '#4B0097',
    buttonBgGrey: '#707070',
    signupGrey:'#666666'
});

export { Login };