import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login/LoginScreen';
import EFGScreens from '../screens/EFG/EFGScreens';
import EFGAddScreen from '../screens/EFG/EFGAddScreen';
import EFGDetailScreen from '../screens/EFG/EFGDetailScreen';
import EFGListScreen from '../screens/EFG/EFGListScreen';
import HomeScreen from '../screens/HomeScreen';
import SondagesScreen from '../screens/SondagesScreen';
import MembresScreen from '../screens/Membres/MembresScreen';
import CanauxScreen from '../screens/CanauxScreen';
import CreerSondageScreen from  '../screens/CreerSondageScreen';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#0068bd',
                },
                headerTintColor: 'white',
            }}>
            <Stack.Screen
                name='LoginScreen' component={LoginScreen}
                options={{ title: "Login", }}
                initialParams={{}}
            ></Stack.Screen>

            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: "Ecran d'accueil" }}
            />

            <Stack.Screen
                name='SondagesScreen'
                options={{ title: 'Sondages' }}
                initialParams={{ canalId: 1, currentUserId: 1 }}
                component={SondagesScreen}>
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
                component={EFGAddScreen}
            />

            <Stack.Screen
                name='EFGDetailScreen'
                options={{ title: 'Exercice' }}
                component={EFGDetailScreen}
            />

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
    )
}

export default AppNavigator