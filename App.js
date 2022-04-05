import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppRoute from './src/navigation/Navigator';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<Provider store={store}>
			<AppRoute />
			<StatusBar style='auto' />
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
