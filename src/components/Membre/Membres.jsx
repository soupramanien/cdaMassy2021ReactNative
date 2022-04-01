import React from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import Membre from "./Membre";
import { useSelector } from "react-redux";
import DeleteMembre from "../../screens/Membres/DeleteMembre";
import AddMembre from "../../screens/Membres/AddMembre";

function Membres() {
  const membres = useSelector((state) => state.reducer.membre.personnes);
  const membresCanal = useSelector(
    (state) => state.reducer.membreCanal.membresCanal
  );
  let membersfusion = [];
  for (const membre of membres) {
    for (const membreCanal of membresCanal) {
      if (membre.idpersonne === membreCanal.idMembre) {
        membersfusion.push({
          idpersonne: membre.idpersonne,
          idCanal: membreCanal.idCanal,
          nom: membre.nom,
        });
      }
    }
  }

  membersfusion = [
    ...new Map(
      membersfusion.map((item) => [item["idpersonne"], item])
    ).values(),
  ];

  const Item = ({ membre }) => (
    <View>
      <Membre key={membre.idpersonne} membre={membre} />
      <DeleteMembre idCanal={membre.idCanal} idpersonne={membre.idpersonne} />
    </View>
  );

  const renderItem = ({ item }) => <Item membre={item} membreCanal={item} />;

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
