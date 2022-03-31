import { useState } from 'react';
import { Text, View, TextInput, Picker } from 'react-native';
import { Switch, TouchableNativeFeedback } from 'react-native-web';

class FormServices {
	// const { touched, error } = props.meta;
	// const isErrorVisible = () => {
	// 	return touched && error ? <Text>{error}</Text> : null;
	// };

	static pickerForm(props) {
		const [selectedValue, setSelectedValue] = useState();
		return (
			<View>
				<Text>{props.label}</Text>
				<Picker
					selectedValue={props.selectedValue}
					onValueChange={(itemValue) => {
						setSelectedValue(itemValue);
						console.log(itemValue);
					}}>
					<Picker.Item label='2' value='2' />
					<Picker.Item label='3' value='3' />
					<Picker.Item label='4' value='4' />
					<Picker.Item label='5' value='5' />
				</Picker>
			</View>
		);
	}

	static inputForm(props) {
		const [selectedValue, setSelectedValue] = useState();
		return (
			<View>
				<Text>{props.label}</Text>
				<TextInput
					onChangeText={(value) => console.log(value)}
					keyboardType='ascii-capable'
				/>
			</View>
		);
	}
}

export default FormServices;

//
