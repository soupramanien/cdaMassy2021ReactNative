import React from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import Membre from "./Membre";
import { useSelector } from "react-redux";
import DeleteMembre from "../../screens/Membres/DeleteMembre";
import AddMembre from "../../screens/Membres/AddMembre";

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
    <SafeAreaView>
      <FlatList
        data={membersfusion}
        renderItem={renderItem}
        keyExtractor={(membre) => membre.idpersonne}
      />

      <AddMembre />
    </SafeAreaView>
  );
}
export default Membres;
