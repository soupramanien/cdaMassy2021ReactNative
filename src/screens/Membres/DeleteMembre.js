import React from "react";
import { useNavigation } from "@react-navigation/native";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useDispatch, useSelector } from "react-redux";
import { actionsCreators } from "../../redux/store";
import { View, Button, StyleSheet } from "react-native";

function DeleteMembre(props) {
  const idCanalCourant = props.idCanalCourant
  const idMembre = props.membre.idMembre

  const dispatch = useDispatch();

  const onDeletePress = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(actionsCreators.deleteMembreDuCanal(idCanalCourant,idMembre));
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
      <Button onPress={onDeletePress} color="#841584" title="Supprimer" />
    </View>
  );
}
export default DeleteMembre;
