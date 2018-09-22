import React, {Component} from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import { loginTheme } from '../../constants/colour';
import strings from '../../constants/language';


class Register extends Component {

  constructor(props) {
    super(props);
    this.state = { email: "", username: "", password: "" };
  }

  // TODO: update to react native elements
  render() {
    return (

    <View style={{
       flex:1,
       justifyContent:'center',
       flexDirection:'column',
       backgroundColor: "white",
       borderBottomColor: '#000000',
       borderBottomWidth: 1 }}
     >
     	<View style={ {flex:1}} >
	     	<Text>Email:</Text>
		    <TextInput
		        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
		        onChangeText={(text) => this.setState({email: text})}
		        value={this.state.text}
		     />
		</View>

		<View style={ {flex:1}} >
		    <Text>UserName:</Text>
		    <TextInput
		        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
		        onChangeText={(text) => this.setState({username: text})}
		        value={this.state.text}
		     />
		</View>


		<View style={ {flex:1}} >
		    <Text>Password:</Text>
		    <TextInput
		        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
		        onChangeText={(text) => this.setState({password: text})}
		        value={this.state.text}
		     />
		</View>

		<View style={ {flex:1}} >
			<Text>Phone(Optional):</Text>
			<TextInput
				style={{height: 40, borderColor: 'gray', borderWidth: 1}}
				onChangeText={(text) => this.setState({password: text})}
				value={this.state.text}
			/>
		</View>

		<View style={ {flex:2}} >
			<Button
			onPress={() => console.log("pressed")}
			title="Submit"
			color="black"
			accessibilityLabel="button_submit"
			/>
		</View>

       </View>

    );
  }
}

// TODO: change to react native style -> Stylesheet.create()
// Colors.loadColors(loginTheme);

export { Register };

