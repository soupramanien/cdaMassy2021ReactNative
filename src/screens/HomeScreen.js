import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { actionsCreators } from '../redux/store';

function HomeScreen(props) {
	const dispatch = useDispatch();
	const navigation = props.navigation;
	const utilisateurCourant = useSelector(
		(state) => state.reducer.utilisateur.courant
	);
	const onResetDatabasePress = () => {
		// Calls the thunk action creator, and passes the thunk function to dispatch
		dispatch(actionsCreators.resetDatabaseAsync());
	};

	const onDisconnect = () => {
		dispatch(actionsCreators.disconnectUser());
	};

	return (
		<View style={styles.container}>
			<Text style={styles.HelloMessage}>
				{' '}
				Bonjour {utilisateurCourant.prenom}
			</Text>

			<TouchableOpacity
				onPress={() =>
					navigation.navigate('CanauxScreen', {
						canalId: 1,
						currentUserId: 1,
					})
				}
				style={styles.button}>
				<Text style={styles.libelle}>Canaux</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() =>
					navigation.navigate('SondagesScreen', {
						canalId: 1,
						currentUserId: 1,
					})
				}
				style={styles.button}>
				<Text style={styles.libelle}>Sondages</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() =>
					navigation.navigate('EFGScreens', { idUser: utilisateurCourant.id })
				}
				style={styles.button}>
				<Text style={styles.libelle}>Les EFGs</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={onResetDatabasePress} style={styles.button}>
				<Text style={styles.libelle}>Reset Database</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={onDisconnect} style={styles.button}>
				<Text style={styles.libelle}>Deconnexion</Text>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#dfecf7',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		justifyContent: 'center',
		backgroundColor: '#0068bd',
		padding: 6,
		borderRadius: 12,
		width: 160,
		margin: 10,
	},
	libelle: {
		color: '#fff',
		fontSize: 18,
		padding: 4,
		margin: 6,
		alignSelf: 'center',
	},
	HelloMessage: {
		color: '#0068bd',
		fontSize: 28,
		margin: 20,
		fontWeight: '900',
	},
});
export default HomeScreen;
