import React, {useEffect}from "react";
import Canal from "./Canal";
import {useDispatch, useSelector} from "react-redux";
import {  View, Text } from 'react-native'
import { actionsCreators } from '../../redux/store';


function Canaux(props){
    const idUtilisateurCourant = 4
    // const idUtilisateurCourant = useSelector(state => state.reducer.utilisateur.idUtilisateurCourant)
    const canaux = useSelector(state => state.reducer.canal.canaux)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actionsCreators.loadCanauxAsync(idUtilisateurCourant))
    },[]);

    return (
        <View>
            <Text> Liste des canaux : Utilisateur No. {idUtilisateurCourant}</Text>
            {canaux.map((canal) => {
                    return (
                    <Canal key={canal.idCanal} 
                        canal={canal} 
                        idUtilisateurCourant={idUtilisateurCourant}/>
                    )
                })}
        </View>
    )
}
export default Canaux;