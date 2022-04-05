import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const AppRoute = () => {
    const isLoggedIn = useSelector((state) => state.reducer.isLoggedIn);
    return (
        <NavigationContainer>
            {/* Conditional stack navigator rendering based on isloggedIn state */}
            {
                isLoggedIn ? <AppNavigator /> : <AuthNavigator />
            }
        </NavigationContainer>
    )
}

export default AppRoute