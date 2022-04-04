import React, { useState } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
<<<<<<< HEAD
import { Field, reduxForm } from 'redux-form';
import EFGForm from '../../components/EFG/EFGForm';
=======
>>>>>>> 243aa8b (add reliquat dispatch&add)

import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

let EFGAddScreen = (props) => {
	const route = props.route;
	let { students } = route.params;

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

	const onSubmit = (values) => {
		console.log('valeurs : ' + JSON.stringify(values));
		// props.reset();
	};

	const studentsPerGroup = selector('studentsPerGroup');
	console.log('étudiants : ' + studentsPerGroup);
	let groupesDispatch = '';
	let groupesAdd = '';

	let minStudents = Math.floor(students / 5);
	let maxStudents = minStudents;
	console.log(students);
	const reliquatAdd = () => {
		let modulo = students % studentsPerGroup;
		let arrGroupes = [];
		for (let i = 0; i < 5; i++) arrGroupes.push(minStudents);
		arrGroupes.push(modulo);
		groupesAdd = arrGroupes.toString();
		return groupesAdd;
	};
	reliquatAdd();
	console.log(groupesAdd);

	return (
		<ScrollView>
			<Text>Création d'un exercice</Text>
			<Text>Il y a {students} élèves dans le canal.</Text>
<<<<<<< HEAD
			<View>
				<Field
					name='intitule'
					label="Intitulé de l'exercice"
					component={EFGForm}
				/>
				<Field name='groupes' label='dede' component={EFGForm} value='sddde' />
				<View>
					<Field
						name='membreParGroupe'
						label="Membres d'élèves par groupes"
						component={EFGForm.select}
					/>
				</View>
				<View>
					<Button
						onPress={props.handleSubmit(onSubmit)}
						buttonLabel='Submit'
						title='Envoyer'
					/>
				</View>
			</View>
=======

			<label>Intitulé de l'exercice</label>
			<Field name='intitule' component='input' type='text' />

			<label>Consignes</label>
			<Field
				name='consignes'
				placeholder='Disponible dans la prochaine mise à jour'
				component='input'
				type='text'
				disabled
			/>

			<label>Nombre d'élèves par groupe</label>
			<Field name='studentsPerGroup' component='select'>
				<option />
				{students >= 4 && <option value='2'>2</option>}
				{students >= 6 && <option value='3'>3</option>}
				{students >= 8 && <option value='4'>4</option>}
				{students >= 10 && <option value='5'>5</option>}
			</Field>

			<Button
				onPress={props.handleSubmit(onSubmit)}
				buttonLabel='Submit'
				title='Envoyer'
			/>
>>>>>>> 243aa8b (add reliquat dispatch&add)
		</ScrollView>
	);
};

EFGAddScreen = reduxForm({
	form: 'efgForm',
})(EFGAddScreen);

const selector = formValueSelector('efgForm');

EFGAddScreen = connect((state) => {
	const intitule = selector(state, 'intitule');

	return {
		intitule,
	};
})(EFGAddScreen);

export default EFGAddScreen;
