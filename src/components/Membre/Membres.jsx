import React, {useEffect} from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
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

  //   let membersfusion = [];
  // for (const membre of membres) {
  //   for (const membreCanal of membresCanal) {
  //     if (membre.idpersonne === membreCanal.idMembre) {
  //       membersfusion.push({
  //         idpersonne: membre.idpersonne,
  //         idCanal: membreCanal.idCanal,
  //         nom: membre.nom,
  //       });
  //     }
  //   }
  // }

  // membersfusion = [
  //   ...new Map(
  //     membersfusion.map((item) => [item["idpersonne"], item])
  //   ).values(),
  // ];

  const Item = ({ membre }) => (
    <View>
      <Membre key={membre.idMembre} membre={membre} />
      <DeleteMembre idCanal={membre.idCanalCourant} idpersonne={membre.idMembre} />
    </View>
  );

  const renderItem = ({ item }) => <Item membre={item} />;

  return (
    <SafeAreaView>
      <FlatList
        data={membres}
        renderItem={renderItem}
        keyExtractor={(membre) => membre.idMembre}
      />

      <AddMembre />
    </SafeAreaView>
  );
}
export default Membres;