import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import Membre from './Membre';
import { useSelector, useDispatch } from 'react-redux';
import {actionsCreators} from '../../redux/store'


function Membres(props) {
    const membres = useSelector(state => state.reducer.membreCanal.membresCanal)
    const dispatch = useDispatch()
    //récupérer idCanal dans props
    const idCanalCurrent = props.idCanalCurrent
    const nomCanalCurrent = props.nomCanalCurrent
    const loadMembres = async () => {
        try {
            const res = await fetch("http://localhost:8080/cdamassy2021/api/canal/" + idCanalCurrent)
            const newMembres = await res.json();
            dispatch(actionsCreators.loadMembresDuCanal(newMembres))
        } catch (error) {
            alert("Network Error")
            console.log(error)
        }
    }

    useEffect(()=>{
        loadMembres()
    },[])

    return (
        <View>
            <Text>Memebres de {nomCanalCurrent}</Text>
            <Text>--------------------------------</Text>
            <Text>Id Membre  |  Nom  |  Prenom</Text>
            {membres.map((membre) => {
                return <Membre key={membre.idMembre} membre={membre}/>
            })}
        </View>

    )

}
export default Membres;