import { useState } from 'react';
import { Text, View, TextInput, Picker} from 'react-native';
import { Switch } from 'react-native-web';

// Consigne 1 : Intégrer un switch "select" et "inputText"
// Consigne 2 : Récupérer via console.log un JSON
// Consigne 3 : (Utiliser les props) M'appeler quand t'as fini ça, parce que ça va être
// chiant à gérer et j'ai pas encore trouvé comment faire.

const EFGForm = (props) => {
	const [selectedValue, setSelectedValue] = useState('membres par groupe');
	// const { touched, error } = props.meta;
	// const isErrorVisible = () => {
	// 	return touched && error ? <Text>{error}</Text> : null;
	// };
	switch (form){
		case 'intitule':
			console.log('intitule');
			break;
		case'membreParGroupe':
			console.log('membreParGroupe');
			break;
			
		default:
			break;

	}


	return (
		<View>
			<Text>{props.label}</Text>
		
					<Picker
						selectedValue={selectedValue}
						onValueChange={(itemValue) => setSelectedValue(itemValue)}>
						<Picker.Item label='2' value='2' />
						<Picker.Item label='3' value='3' />
						<Picker.Item label='4' value='4' />
						<Picker.Item label='5' value='5' />
					</Picker>
			
			{/* {isErrorVisible()} */}
		</View>
	);
};
export default EFGForm;
//
