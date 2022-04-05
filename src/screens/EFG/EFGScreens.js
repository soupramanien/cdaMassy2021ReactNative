import { useEffect, useState } from 'react';
import {
	Text,
	View,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import EFGServices from '../../fetch/EFGfetch';
import { actionsCreators } from '../../redux/store';

function EFGScreens({ navigation, route }) {
	// const [canaux,setCanaux] = useState([
	//   {
	//     idCanal : 1,
	//     nom : "truc"
	//   },
	//   {
	//     idCanal : 2,
	//     nom : "bidule"
	//   }
	// ]);

	const idUtilisateurCourant = route.params.idUser;
	const canaux = useSelector((state) => state.reducer.canal.canaux);
	const dispatch = useDispatch();

	const loadCanaux = () => {
		dispatch(actionsCreators.loadCanauxAsync(idUtilisateurCourant));
	};

	useEffect(() => {
		// EFGServices.getCanaux(setCanaux,1)
		loadCanaux();
	}, []);

	return (
		<View style={styles.container}>
			<FlatList
				data={canaux}
				keyExtractor={(canal) => String(canal.idCanal)}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={styles.item}
						onPress={() => {
							navigation.navigate('EFGList', {
								idCanal: item.idCanal,
								nom: item.nom,
								membres: 6, // temporaire, il faut fetch le véritable nombre dans EFGListScreen
							});
						}}>
						<Text>Exercices du canal "{item.nom}"</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	item: {
		padding: 16,
		backgroundColor: 'white',
		borderBottomWidth: 1,
		borderBottomColor: 'lightgray',
	},
});
export default EFGScreens;
