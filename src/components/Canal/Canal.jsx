import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, View, Text } from 'react-native'


export default function Canal(props) {
    const navigation = useNavigation();
    //récupérer idCanal actuelle
    const idCanalCourant = props.canal.idCanal
    const nomCanalCourant = props.canal.nom
    return (
        <View>
            <Text>  {props.canal.nom}  :  Id Canal = {idCanalCourant}
                <Button
                    title='Show Membres'
                    onPress={() => navigation.navigate(
                        "MembresScreen",
                        //envoyer idCanal et nom à l'écran appelée
                        { idCanalCourant, nomCanalCourant })}
                />
            </Text>

        </View>
    )
}

