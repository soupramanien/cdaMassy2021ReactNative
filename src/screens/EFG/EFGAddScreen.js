import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SelectingFormValuesForm from '../../components/EFG/EFGForm';

let EFGAddScreen = (props) => {
	const route = props.route;
	let { students, idCreateur } = route.params;
	// const groupesAdd = '';
	// const [groupe, setGroups] = useState('');
	const [data, setData] = useState('');

	return (
		<View styles={styles.container}>
			<p> Nombre d'étudiants dans le canal : {students}</p>
			<p>Numéro du créateur : {idCreateur}</p>
			<SelectingFormValuesForm
				students={students}
				idCreateur={idCreateur}
				data={data}
				setData={setData}
			/>
			{data != '' && (
				<>
					<p>Aperçu de l'exercice</p>
					<p>
						Titre de l'exercice :
						{data.intitule === undefined
							? "Veuillez entrer un intitulé pour l'exercice"
							: data.intitule}
						<br />
						Consigne : fonctionnalité à venir. <br />
						Répartition des groupes :
						{data.groupes === 0
							? "Veuillez choisir un nombre d'élève par groupe."
							: data.groupes}
						.
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
