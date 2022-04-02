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
  const [membre, setMembre] = useState({
    name: "",
  });
  const [error, setError] = useState({
    name: true,
  });
  const [text, setText] = useState("");
  const membreCanal = useSelector(
    (state) => state.reducer.membreCanal.membresCanal
  );
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
    setMembre((membre) => ({ ...membre, [name]: text }));
    
  };
  

  const onAddPress = () => {
    const membre = {
      nom: text,
      idpersonne: 10,
    };
    const mCanal ={
        idMembre: membre.idpersonne,
        idCanal: 1,
    }
    console.log(membre);
    dispatch(actionsCreators.addMembre(membre));
    dispatch(actionsCreators.addMembreCanal(mCanal));

    navigation.navigate("MembresScreen");

  };

  return (
    <SafeAreaView>
      <TextInput
        value={membre.name}
        style={
          error.name
            ? [styles.textInput, styles.invalid]
            : [styles.textInput, styles.valid]
        }
        placeholder="Enter Name"
        onChangeText={(text) => onChange(text, "name")}
      />
      <Button onPress={onAddPress} title="Ajouter" color="aquamarine" />
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
