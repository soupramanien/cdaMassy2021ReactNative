import React, { useState } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import SelectingFormValuesForm from '../../components/EFG/EFGForm';
import EFGServices from '../../fetch/EFGfetch';

let EFGAddScreen = (props) => {
	const route = props.route;
	let { students, idCreateur, idCanal } = route.params;
	const [data, setData] = useState('');

	return (
		<View styles={styles.container}>
			<Text>Créer un exercice</Text>
			<SelectingFormValuesForm
				students={students}
				idCreateur={idCreateur}
				data={data}
				setData={setData}
			/>
			{data != '' && (
				<>
					<Text>Aperçu de l'exercice</Text>
					<Text>
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
					</Text>
					{isNaN(data.groupes) &&
					data.intitule != '' &&
					data.intitule != undefined ? (
						<Button
							onClick={() => {
								EFGServices.postEFG(() => {}, data, data.idCanal);
							}}
							title="Confirmer l'envoi"
						/>
					) : (
						<Button title="Confirmer l'envoi" disabled />
					)}
				</>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
export default EFGAddScreen;
