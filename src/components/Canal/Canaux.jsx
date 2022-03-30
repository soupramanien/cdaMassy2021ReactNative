import React from "react";
import Canal from "./Canal";
import {useSelector} from "react-redux";
import {  View, Text } from 'react-native'


function Canaux(){
    let idPersonneConnecter =1;
    const canaux = useSelector(state => state.reducer.canal.canaux)
    return (
        <View>
            <Text> Liste des canaux  </Text>
            {canaux.map((canal) => {
                    return (
                    <Canal key={canal.idCanal} 
                        canal={canal} 
                        idPersonneConnecter={idPersonneConnecter}/>
                    )
                })}
        </View>
    )
}
export default Canaux;