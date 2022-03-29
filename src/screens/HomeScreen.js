import { Button, StyleSheet, Text, View } from 'react-native';

function HomeScreen(props) {
	const navigation = props.navigation;
	const members = 24;

	return (
		<View style={styles.container}>
			<Text>Home Screen</Text>
			<Button
				title='Créer un EFG'
				onPress={() =>
					navigation.navigate('EFGAddScreen', { students: members - 1 })
				}
			/>
			<Button
				title='Go to Sondages'
				onPress={() =>
					navigation.navigate('SondagesScreen', {
						canalId: 1,
						currentUserId: 1,
					})
				}
			/>
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
});
export default HomeScreen;
