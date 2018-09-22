import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';

/**
 * @param name this is the labelfor the input
 * @param onChange a function is called when text is changed
 * @param error this is the validation message
 */
class FormBox extends Component {
  render() {
    const { container } = styles;
    const { name, onChange } = this.props;
    return (
      <View style={container}>
        <FormLabel>{name}</FormLabel>
        <FormInput onChangeText={onChange}/>
      </View>
    )
  };
}

const styles = StyleSheet.create({

});

export { FormBox };
