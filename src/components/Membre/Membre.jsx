import React from 'react'
import { View, Text } from 'react-native'


function Membre(props) {

    return (
        <View>
            <Text>{props.membre.idMembre} | {props.membre.nom} | {props.membre.prenom} </Text>
        </View>
    )
}
export default Membre;