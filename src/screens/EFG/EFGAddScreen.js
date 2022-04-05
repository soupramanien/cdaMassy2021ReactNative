import React, { useState } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import SelectingFormValuesForm from '../../components/EFG/EFGForm';
import EFGServices from '../../fetch/EFGfetch';
import { actionsCreators } from '../../redux/store';

let EFGAddScreen = (props) => {
	const route = props.route;
	const dispatch = useDispatch();
	let { students, idCreateur,idCanal } = route.params;
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
							type='submit'
							onPress={() => {
								let res = {...data,idCanal:1};
								console.log(res);
								// EFGServices.postEFG(() => {}, data, idCanal);
								dispatch(actionsCreators.addEfgAsync(res,1));
								props.navigation.goBack();
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
