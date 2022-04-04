import React, { useState } from 'react';
<<<<<<< HEAD
import { ScrollView, Text, View, Button } from 'react-native';
<<<<<<< HEAD
import { Field, reduxForm } from 'redux-form';
import EFGForm from '../../components/EFG/EFGForm';
=======
>>>>>>> 243aa8b (add reliquat dispatch&add)

=======
import { StyleSheet, ScrollView, Text, View, Button } from 'react-native';
import SelectingFormValuesForm from '../../components/EFG/EFGForm';
>>>>>>> 9d4eef4 (add preview for efg form)
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

let EFGAddScreen = (props) => {
	const route = props.route;
	let { students, idCreateur } = route.params;
	// const groupesAdd = '';
	// const [groupe, setGroups] = useState('');

	const [data, setData] = useState('');

	const [intituleEFG, setIntituleEFG] = useState('Nouvel exercice');

	return (
<<<<<<< HEAD
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
=======
		<View style={styles.container}>
			<p> Nombre d'étudiants dans le canal : {students}</p>

			<SelectingFormValuesForm
				students={students}
				data={data}
				setData={setData}
				setIntituleEFG={setIntituleEFG}
			/>

			{data != '' && (
				<>
					<p>Aperçu de l'exercice</p>
					<p>
						Titre de l'exercice : {data.intitule}
						<br />
						Consigne : fonctionnalité à venir. <br />
						Répartition des groupes : aucune pour le moment.
					</p>
					{data.groupes != 0 && (
						<button onClick={() => console.log('Envoyé!')}>
							Confirmer l'envoi
						</button>
					)}
					{data.groupes === 0 && (
						<button onClick={() => console.log('Envoyé!')} disabled>
							Confirmer l'envoi
						</button>
					)}
				</>
			)}
		</View>
>>>>>>> 9d4eef4 (add preview for efg form)
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
export default EFGAddScreen;
