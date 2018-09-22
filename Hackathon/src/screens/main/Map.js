import React, { Component } from 'react';
import { View, Text, WebView, StyleSheet } from 'react-native';

class Map extends Component {
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <WebView source={{uri: 'https://www.google.com.au/maps/'}}/>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export { Map };
