import React, {useEffect}from "react";
import Canal from "./Canal";
import {useDispatch, useSelector} from "react-redux";
import {  View, Text } from 'react-native'
import { actionsCreators } from '../../redux/store';


function Canaux(props){
    const idUtilisateurCourant = useSelector(state => state.reducer.utilisateur.idUtilisateurCourant)
    const canaux = useSelector(state => state.reducer.canal.canaux)
    const dispatch = useDispatch();
    const loadCanaux = async () =>{
        try {
            const res = await fetch("http://localhost:8080/cdamassy2021/api/canaux/" + idUtilisateurCourant )
            const newCanaux = await res.json();
            dispatch(actionsCreators.loadCanaux(newCanaux))
        } catch (error) {
            alert("Network Error")
            console.log(error)
        }
    };

    useEffect(() => {
        loadCanaux();
    },[]);

    return (
        <View>
            <Text> Liste des canaux : Memebre {idUtilisateurCourant}</Text>
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