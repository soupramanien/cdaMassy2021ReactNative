import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, View, Text } from 'react-native'
import MembresScreen from '../../screens/Membres/MembresScreen';

export default function Canal() {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Canal 1
            <Button
                title='Go to Membres'
                onPress={() => navigation.navigate("MembresScreen")}
             />
            </Text>
            <Text>Canal 2
            <Button
                title='Go to Membres'
                onPress={() => navigation.navigate("MembresScreen")}
             />
            </Text>
            <Text>Canal 3
            <Button
                title='Go to Membres'
                onPress={() => navigation.navigate("MembresScreen")}
             />
             </Text> 
            
        </View>
    )
}