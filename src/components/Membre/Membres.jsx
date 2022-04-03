import React, {useEffect} from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import Membre from './Membre';
import AddMembre from '../../screens/Membres/AddMembre'
import DeleteMembre from '../../screens/Membres/DeleteMembre'
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

  const Item = ({ membre }) => (
    <View>
      <Membre key={membre.idMembre} membre={membre} />
      <DeleteMembre idCanalCourant={idCanalCourant} membre={membre} />
    </View>
  );

  const renderItem = ({ item }) => <Item membre={item} />;

  return (
    <SafeAreaView>
      <Text> Memebres : {nomCanalCourant} | Id Canal : {idCanalCourant} </Text>
      <FlatList
        data={membres}
        renderItem={renderItem}
        keyExtractor={(membre) => membre.idMembre}
      />

      <AddMembre idCanalCourant={idCanalCourant} />
    </SafeAreaView>
  );
}
export default Membres;