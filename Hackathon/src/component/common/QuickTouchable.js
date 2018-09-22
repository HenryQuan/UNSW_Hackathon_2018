import React, { Component } from 'react';
import { TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native';

class QuickTouchable extends Component {
  render() {
    const { children, style, ...props  } = this.props;
    const Touchable = Platform.OS == "android" ? TouchableNativeFeedback : TouchableOpacity;    
    return (
      <Touchable {...props}>
        <View style={style}>
          {children}
        </View>
      </Touchable>
    )
  }
}

export { QuickTouchable };