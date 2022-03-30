import React from 'react'
import { View, Text } from 'react-native'


function Membre(props) {

    return (
        <View>
            <Text>{props.membre.nom}</Text>
        </View>
    )
}
export default Membre;