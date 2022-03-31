import React from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import EFGForm from '../../components/EFG/EFGForm';

const EFGAddScreen = (props) => {
	const onSubmit = (values) => {
		console.log(values);
		props.reset();
	};

	return (
		<ScrollView>
			<Text>Création d'un exercice</Text>
			<Text>Il y a {students} élèves dans le canal.</Text>
			<View>
				<Field
					name='intitule'
					label="Intitulé de l'exercice"
					component={EFGForm}
				/>
				<Field
					name='groupes'
					label='Nombre de membres par groupe'
					component={EFGForm}
				/>

				<View>
					<Button
						onPress={props.handleSubmit(onSubmit)}
						buttonLabel='Submit'
						title='Envoyer'
					/>
				</View>
			</View>
		</ScrollView>
	);
};

export default reduxForm({
	form: 'myForm',
})(EFGAddScreen);
