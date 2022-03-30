import React from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import EFGForm from '../../components/EFG/EFGForm';

const EFGAddScreen = (props) => {
	const route = props.route;
	let groupesDispatch = '';
	let groupesAdd = '';
	let { students } = route.params;

	let minStudents = Math.floor(students / 5);
	let maxStudents = minStudents;

	const reliquatDispatch = () => {
		let modulo = 23 % 5;
		let arrGroupes = [];
		for (let i = 0; i < 5; i++) arrGroupes.push(minStudents);
		if (modulo !== 0) maxStudents++;
		while (modulo !== 0) {
			arrGroupes[modulo - 1] = maxStudents;
			modulo--;
		}
		return (groupesDispatch = arrGroupes.toString());
	};
	reliquatDispatch();

	const reliquatAdd = () => {
		let modulo = 23 % 5;
		let arrGroupes = [];
		for (let i = 0; i < 5; i++) arrGroupes.push(minStudents);
		arrGroupes.push(modulo);
		return (groupesAdd = arrGroupes.toString());
	};
	reliquatAdd();

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
				<Field name='groupes' label='dede' component={EFGForm} value='sddde' />

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
