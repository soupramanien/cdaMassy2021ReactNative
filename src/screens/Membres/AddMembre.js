import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  Button,
  Alert,
  StyleSheet,
  TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { actionsCreators } from "../../redux/store";

function AddMembre(props) {
  const [error, setError] = useState({
    name: true,
  });
  const [text, setText] = useState("");
  const [obj, setObjet] = useState({idMembreAjouter : 0})
  // const idCanalCourant = props.idCanalCourant
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onChange = (text, name) => {
    switch (name) {
      case "name":
        if (text.length > 0) {
            setText(text);
          setError((error) => ({ ...error, name: false }));
        } else {
          setError((error) => ({ ...error, name: true }));
        }
        break;

      default:
        break;
    }
      setObjet({...obj, idMembreAjouter : text})
  };

  console.log(obj.idMembreAjouter)

  const onAddPress = () => {
    dispatch(actionsCreators.addMembreCanal(props.idCanalCourant, obj.idMembreAjouter));
  };

  return (
    <SafeAreaView>
      <TextInput
        style={
          error.name
            ? [styles.textInput, styles.invalid]
            : [styles.textInput, styles.valid]
        }
        placeholder="Enter Id du membre"
        onChangeText={(text) => onChange(text, "name")}
      />
      <Button onPress={onAddPress} 
        title="Ajouter" 
        color="aquamarine" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderStyle: "solid",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginBottom: 2,
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  valid: {
    borderStyle: "solid",
    borderBottomColor: "green",
    borderBottomWidth: 2,
  },
  invalid: {
    borderStyle: "solid",
    borderBottomColor: "red",
    borderBottomWidth: 2,
  },
});


export default AddMembre;