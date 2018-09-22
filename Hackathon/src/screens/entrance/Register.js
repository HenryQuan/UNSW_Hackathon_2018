import React, { Component } from 'react';
import { View, TextInput, Text, Button, Alert } from 'react-native';
import strings from '../../constants/language';
import { Actions } from 'react-native-router-flux';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", username: "", password: "", phone: "" };
  }

  // TODO: update to react native elements
  render() {
    return (
			<View style={{flex:1,
				padding: 8,
				justifyContent:'center',
				flexDirection:'column',
				backgroundColor: "white",
				borderBottomColor: '#000000',
				borderBottomWidth: 1 }}>
     		<View style={ {flex:1}} >
	     		<Text>Email:</Text>
		    	<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
		        onChangeText={(text) => this.setState({email: text})} value={this.state.text}/>
				</View>

				<View style={ {flex:1}} >
					<Text>UserName:</Text>
					<TextInput
							style={{height: 40, borderColor: 'gray', borderWidth: 1}}
							onChangeText={(text) => this.setState({username: text})}
							value={this.state.text}/>
				</View>

				<View style={ {flex:1}} >
					<Text>Password:</Text>
					<TextInput secureTextEntry style={{height: 40, borderColor: 'gray', borderWidth: 1}}
						onChangeText={(text) => this.setState({password: text})} value={this.state.text}/>
				</View>

				<View style={ {flex:1}} >
					<Text>Phone (Optional):</Text>
					<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
						onChangeText={(text) => this.setState({phone: text})} value={this.state.text} />
				</View>

				<View style={ {flex:2}} >
					<Button onPress={() => this.pushToMap()}
						title="Submit" color="black"
						accessibilityLabel="button_submit" />
				</View>
      </View>
    );
	}
	
	/**
	 * validate input and go to map
	 */
	pushToMap() {
		const { password, email, username } = this.state;
		if (password == "" || email == "" || username == "") {
			// Only check for empty input now
			Alert.alert(strings.alert_warning, strings.register_failure);
		} else {
			// Go to map now
			global.username = username;
			Actions.map();
		}
	}
}

export { Register };

