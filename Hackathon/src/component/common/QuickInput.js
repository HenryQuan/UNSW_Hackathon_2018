import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import strings from '../../constants/language';

class QuickInput extends Component {
  render() {
    const { name, onChange } = this.props; 
    const { title, mainView, input } = styles;  
    return (
      <View style={mainView}>
        <Text style={title}>{name}</Text>
        <TextInput style={input} onChangeText={onChange} placeholder={strings.placeholder}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    padding: 16,
    marginBottom: 16
  },
  title: {
    fontSize: 14,
  },
  input: {
    fontSize: 14
  }
})

export { QuickInput };