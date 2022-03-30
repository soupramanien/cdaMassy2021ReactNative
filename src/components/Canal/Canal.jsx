import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, View, Text } from 'react-native'


export default function Canal(props) {
    const navigation = useNavigation();

    return (
        <View>
            <Text>  {props.canal.nom}
            <Button
                title='Go to Membres'
                onPress={() => navigation.navigate("MembresScreen")}
             />
             </Text>
            
        </View>
    )
}

