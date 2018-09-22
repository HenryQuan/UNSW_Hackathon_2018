import React, { Component } from 'react';
import { View, Text, WebView, StyleSheet } from 'react-native';
import { QuickTouchable } from '../../component';
import { Actions } from 'react-native-router-flux';

class Map extends Component {
  render() {
    const { container, cover, bottom } = styles;
    return (
      <View style={container}>
        <WebView source={{uri: 'https://www.google.com.au/maps/'}}/>
        <View style={cover}>

        </View>
        <View style={bottom}>
          <QuickTouchable onPress={() => Actions.nearby()}>
            <Text>Around me</Text>
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
    position: 'absolute', justifyContent: 'center',
    height: 57, width: '100%',
    backgroundColor: 'white'
  },
  bottom: {
    position: 'absolute', justifyContent: 'flex-end', alignItems: 'center',
    
    height: 50, width: '100%',
    backgroundColor: 'white', bottom: 0,
  }
});

export { Map };
