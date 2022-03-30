import React from 'react';
import { View, Text } from 'react-native';
import Membre from './Membre';
import { useSelector } from "react-redux";

function Membres() {
    const membres = useSelector(state => state.reducer.membreCanal.membresCanal)
    return (
        <View>
            <Text>Liste Des Memebres</Text>
            <Text>Id Membre  |  Nom  |  Prenom</Text>
            {membres.map((membre) => {
                return <Membre key={membre.idMembre} membre={membre}/>
            })}
        </View>

    )

}
export default Membres;