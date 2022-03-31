import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, View, Text } from 'react-native'


export default function Canal(props) {
    const navigation = useNavigation();
    const idCanal = props.canal.idCanal

    return (
        <View>
            <Text>  {props.canal.nom}  :  Id Canal = {idCanal}  <Button
                title='Go to Membres'
                onPress={() => navigation.navigate("MembresScreen")}
             />
             </Text>
            
        </View>
    )
}

