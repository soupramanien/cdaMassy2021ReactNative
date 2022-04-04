import { Button, StyleSheet, Text, View } from 'react-native';
import SelectingFormValuesForm from '../components/EFG/EFGForm';
import EFGAddScreen from './EFG/EFGAddScreen';
function HomeScreen(props) {
	const navigation = props.navigation;

	return (
		<View style={styles.container}>
<<<<<<< HEAD
			<Text>Home Screen</Text>
			<Button
				title='Go to Canaux'
				onPress={() => navigation.navigate("CanauxScreen", {
					canalId: 1,
					currentUserId: 1
				})}
			/>
			
			<Button
=======
			{/* <Text>Home Screen</Text> */}
			{/* <SelectingFormValuesForm /> */}
			{/* <EFGAddScreen /> */}
			<Button
				title='go to createEFG'
				onPress={() =>
					navigation.navigate('EFGAddScreen', {
						students: 25,
						idCreateur: 1,
					})
				}
			/>
			{/* <Button
>>>>>>> 243aa8b (add reliquat dispatch&add)
				title='Go to Sondages'
				onPress={() =>
					navigation.navigate('SondagesScreen', {
						canalId: 1,
						currentUserId: 1,
					})
				}
			/>

			<Button
				title='Les EFGs'
				onPress={() => navigation.navigate('EFGScreens')}
			/>

			<Button
				title='Créer un EFG'
				onPress={() => navigation.navigate('EFGAddScreen', { students: 25 })}
			/> */}
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
