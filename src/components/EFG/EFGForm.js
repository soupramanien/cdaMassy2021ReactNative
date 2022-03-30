import {useState} from 'react';
import { Text, View, TextInput, Picker } from 'react-native';


const EFGForm = (props) => {
 	const [selectedValue, setSelectedValue] = useState("membres par groupe");
	// const { touched, error } = props.meta;
	// const isErrorVisible = () => {
	// 	return touched && error ? <Text>{error}</Text> : null;
	// };
	return (
		<View>
			<Text>{props.label}</Text>
			<View>
				<Picker
				selectedValue={selectedValue}
				onValueChange={(itemValue) => setSelectedValue(itemValue)}
				>
					<Picker.Item label="2" value="2"/>
					<Picker.Item label="3" value="3"/>
					<Picker.Item label="4" value="4"/>
					<Picker.Item label="5" value="5"/>
				</Picker>

			</View>
			{/* {isErrorVisible()} */}
		</View>
	);
};
export default EFGForm;
// 