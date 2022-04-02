import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import Membre from './Membre';
import { useSelector, useDispatch } from 'react-redux';
import {actionsCreators} from '../../redux/store'


function Membres(props) {
    const membres = useSelector(state => state.reducer.membreCanal.membresCanal)
    const dispatch = useDispatch()
    //récupérer idCanal dans props
    const idCanalCourant = props.idCanalCourant
    const nomCanalCourant = props.nomCanalCourant
    useEffect(()=>{
        dispatch(actionsCreators.loadMembresDuCanalAsync(idCanalCourant))
    },[])

    return (
        <View>
            <Text>Membres de {nomCanalCourant} , id canal {idCanalCourant}</Text>
            <Text>--------------------------------</Text>
            <Text>Id Membre  |  Nom  |  Prenom</Text>
            {membres.map((membre) => {
                return <Membre key={membre.idMembre} membre={membre}/>
            })}
        </View>

    )

}
export default Membres;