import React, { useState } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import EFGForm from '../../components/EFG/EFGForm';

import { StyleSheet, ScrollView, Text, View, Button } from 'react-native';
import SelectingFormValuesForm from '../../components/EFG/EFGForm';
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
		<View style={styles.container}>
			{console.log()}

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
						Répartition des groupes : {data.groupes}.
					</p>

					{isNaN(data.groupes) ? (
						<button onClick={() => console.log('Envoyé!')}>
							Confirmer l'envoi
						</button>
					) : (
						<button disabled>Confirmer l'envoi</button>
					)}
				</>
			)}
		</View>
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
