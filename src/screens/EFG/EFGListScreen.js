import { useState, useEffect } from 'react';
import { Button, View, FlatList, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import EFGCard from '../../components/EFG/EFGCard';
import EFGServices from '../../fetch/EFGfetch';
import { actionsCreators } from '../../redux/store';

export default function EFGListScreen({ navigation, route }) {
	const canalId = route.params.idCanal;
	// const [nombreMembres,setNombreMembres] = useState(route.params.membres);
	// const [efgs,setEfgs] = useState([])

	// useEffect(()=>{
	//     EFGServices.getAllEFGs(setEfgs,canalId);
	//     EFGServices.getNombreMembres(setNombreMembres,canalId);
	// },[canalId])

	const efgs = useSelector((state) => state.reducer.efgs);
	const nombreMembres = useSelector((state) => state.reducer.nombreMembres);
	const dispatch = useDispatch();
	const loadEfgs = () => {
		dispatch(actionsCreators.loadEfgsAsync(canalId));
	};
	const loadNombreMembres = () => {
		dispatch(actionsCreators.loadNombreMembresAsync(canalId));
	};

	useEffect(() => {
		loadEfgs();
		loadNombreMembres();
	}, []);

	return (
		<View style={styles.container}>
			{efgs.length > 0 && (
				<FlatList
					data={efgs}
					keyExtractor={(efg) => String(efg.idEfg)}
					renderItem={(efgs) => (
						<View style={styles.item}>
							<EFGCard efg={efgs.item} isEFGScreen={false} />
							<Button
								title="voir l'exercice"
								onPress={() =>
									navigation.navigate('EFGDetailScreen', {
										idEfg: efgs.item.idEfg,
									})
								}
							/>
						</View>
					)}
				/>
			)}

			{(nombreMembres < 5 ||
				nombreMembres === undefined ||
				nombreMembres === null) && (
				<Text>
					Veuillez rajouter des élèves dans votre canal pour pouvoir créer un
					exercice.
				</Text>
			)}

			{nombreMembres >= 5 && (
				<Button
					title='Créer un EFG'
					onPress={() =>
						navigation.navigate('EFGAddScreen', {
							students: nombreMembres,
							idCreateur: 1,
						})
					}
				/>
			)}
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	item: {
		padding: 16,
		backgroundColor: 'white',
		borderBottomWidth: 1,
		borderBottomColor: 'lightgray',
	},
});
