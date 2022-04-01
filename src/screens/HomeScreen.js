import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { actionsCreators } from '../redux/store';

function HomeScreen(props) {
	const dispatch = useDispatch();
	const navigation = props.navigation;
	const onResetDatabasePress = () => {
		// Calls the thunk action creator, and passes the thunk function to dispatch
		dispatch(actionsCreators.resetDatabaseAsync());
	};
	return (
		<View style={styles.container}>
			<Text>Home Screen</Text>


			<TouchableOpacity 
					onPress={() => navigation.navigate("CanauxScreen", {
						canalId: 1,
						currentUserId: 1})} 
					style={styles.button}>
				<Text style={styles.libelle}>Go to Canaux</Text>
			</TouchableOpacity>

			<TouchableOpacity 
					onPress={() => navigation.navigate("MembresScreen", {
						canalId: 1,
						currentUserId: 1})} 
					style={styles.button}>
				<Text style={styles.libelle}>Go to Membres</Text>
			</TouchableOpacity>


			<TouchableOpacity 
					onPress={() =>
						navigation.navigate('SondagesScreen', {
						canalId: 1,
						currentUserId: 1,
						})
					} style={styles.button}>
				<Text style={styles.libelle}>Go to Sondages</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => navigation.navigate('EFGScreens')} style={styles.button}>
				<Text style={styles.libelle}>Les EFGs</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => navigation.navigate('EFGAddScreen', {})} style={styles.button}>
				<Text style={styles.libelle}>Créer un EFG</Text>
			</TouchableOpacity>


			<TouchableOpacity onPress={onResetDatabasePress} style={styles.button}>
				<Text style={styles.libelle}>Reset Database</Text>
			</TouchableOpacity>
			
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
	button:{
		backgroundColor: '#dfecf7',
		padding: 15,
		borderRadius: 8,
		margin: 8,
		borderRadius: 40,
		borderColor: 'rgb(255, 255, 255)'
	},
	libelle: {
		color: '#0068bd',
		fontSize: 15,
		alignSelf: 'center',
		fontWeight: 'bold'
	}
});
export default HomeScreen;
