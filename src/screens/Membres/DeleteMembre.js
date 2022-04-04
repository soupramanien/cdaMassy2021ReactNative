import React from "react";
import { useNavigation } from "@react-navigation/native";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useDispatch, useSelector } from "react-redux";
import { actionsCreators } from "../../redux/store";
import { View, Button, StyleSheet } from "react-native";

function DeleteMembre(props) {
  const membreCanal = useSelector(
    (state) => state.reducer.membreCanal.membresCanal
  );

  const dispatch = useDispatch();
  const navigation = useNavigation();
  let mCanal = {
    idCanal: props.idCanal,
    idMembre: props.idpersonne,
  };
  const onDeleteMembrePress = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(actionsCreators.deleteMembre(mCanal));
            navigation.navigate("MembresScreen");
          },
        },

        {
          label: "No",
          onClick: () => alert("Suppression annulee"),
        },
      ],
    });
  };

  return (
    <View>
      <Button onPress={onDeleteMembrePress} color="#841584" title="Supprimer" />
    </View>
  );
}
export default DeleteMembre;
