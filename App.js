import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SondagesScreen from './src/screens/SondagesScreen';
import CreerSondageScreen from './src/screens/CreerSondageScreen';
import CanauxScreen from './src/screens/CanauxScreen';
import MembresScreen from './src/screens/Membres/MembresScreen';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import EFGScreens from './src/screens/EFG/EFGScreens';
import EFGListScreen from './src/screens/EFG/EFGListScreen';
import EFGAddScreen from './src/screens/EFG/EFGAddScreen';
<<<<<<< HEAD
import EFGDetailScreen from './src/screens/EFG/EFGDetailScreen';
=======
import EFGForm from './src/components/EFG/EFGForm';
>>>>>>> 243aa8b (add reliquat dispatch&add)

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Home'
					screenOptions={{
						headerStyle: {
							backgroundColor: 'blue',
						},
						headerTintColor: 'white',
					}}>
					<Stack.Screen
						name='Home'
						component={HomeScreen}
						options={{ title: "Ecran d'accueil" }}
					/>

					<Stack.Screen
						name='SondagesScreen'
						options={{ title: 'Sondages' }}
						initialParams={{ canalId: 1, currentUserId: 1 }}>
						{(props) => <SondagesScreen {...props} />}
					</Stack.Screen>

					<Stack.Screen
						name='EFGScreens'
						component={EFGScreens}
						options={{ title: 'Exercices en groupes' }}
					/>

					<Stack.Screen
						name='EFGList'
						component={EFGListScreen}
						options={({ route }) => ({ title: route.params.nom })}
					/>

					<Stack.Screen
						name='EFGAddScreen'
						options={{ title: 'Créer un EFG' }}
<<<<<<< HEAD
						component={EFGAddScreen}
					/>

					<Stack.Screen
						name='EFGDetailScreen'
						options={{ title: 'Exercice' }}
						component={EFGDetailScreen}
					/>

=======
						component={EFGForm}></Stack.Screen>
>>>>>>> 243aa8b (add reliquat dispatch&add)
					<Stack.Screen
						name='CreerSondageScreen'
						options={{ title: 'Creer Sondage' }}
						initialParams={{ canalId: 1, currentUserId: 1 }}>
						{(props) => <CreerSondageScreen {...props} />}
					</Stack.Screen>

					<Stack.Screen
						name='CanauxScreen' component={CanauxScreen}
						options={{ title: "Canaux", }}
						initialParams={{}}
					>
					</Stack.Screen>

					<Stack.Screen
						name='MembresScreen' component={MembresScreen}
						options={{ title: "Membres", }}
						initialParams={{}}
					>
					</Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
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
