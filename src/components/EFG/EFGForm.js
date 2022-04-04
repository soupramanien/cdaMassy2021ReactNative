import React from 'react';
import { Text, View, TextInput } from 'react-native';

const EFGForm = (props) => {
	// const { touched, error } = props.meta;
	// const isErrorVisible = () => {
	// 	return touched && error ? <Text>{error}</Text> : null;
	// };
	return (
		<View>
			<Text>{props.label}</Text>
			<View>
				<TextInput />
			</View>
			{/* {isErrorVisible()} */}
		</View>
	);
};
export default EFGForm;