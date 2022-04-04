import { useEffect, useState } from 'react';
import {
	Text,
	View,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import EFGServices from '../../fetch/EFGfetch';

function EFGScreens({ navigation }) {
	const [canaux, setCanaux] = useState([
		{
			idCanal: 1,
			nom: 'truc',
		},
		{
			idCanal: 2,
			nom: 'bidule',
		},
	]);

	useEffect(() => {
		EFGServices.getCanaux(setCanaux, 1);
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
