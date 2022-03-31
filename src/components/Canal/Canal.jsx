import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, View, Text } from 'react-native'


export default function Canal(props) {
    const navigation = useNavigation();
    //récupérer idCanal actuelle
    const idCanalCurrent = props.canal.idCanal
    return (
        <View>
            <Text>  {props.canal.nom}  :  Id Canal = {idCanalCurrent}
                <Button
                    title='Go to Membres'
                    onPress={() => navigation.navigate(
                        "MembresScreen",
                        //envoyer idCanal à l'écran appelée
                        { idCanalCurrent })}
                />
            </Text>

        </View>
    )
}

