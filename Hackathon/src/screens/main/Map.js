import React, { Component } from 'react';
import { View, Text, WebView, StyleSheet } from 'react-native';
import { QuickTouchable } from '../../component';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';

class Map extends Component {
  render() {
    const { container, cover, bottom, button, title } = styles;
    return (
      <View style={container}>
        <WebView source={{uri: 'https://www.google.com.au/maps/'}}/>
        <View style={cover}>
          <Icon name='menu'/>
          <Text style={title}>StorageTrick</Text>
        </View>
        <View style={bottom}>
          <QuickTouchable onPress={() => Actions.nearby()}>
            <Text style={button}>Around me</Text>
          </QuickTouchable>
        </View>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cover: {
    position: 'absolute', justifyContent: 'flex-start',
    alignItems: 'center', padding: 16,
    height: 57, width: '100%', flexDirection: 'row',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 17, fontWeight: '500', margin: 16, color: 'black'
  },
  bottom: {
    position: 'absolute', justifyContent: 'center', alignItems: 'center',
    height: 50, width: '100%',
    backgroundColor: 'white', bottom: 0,
  },
  button: {
    width: 140, textAlign: 'center',
    fontSize: 17, fontWeight: '200',
    height: 36
  }
});

export { Map };
