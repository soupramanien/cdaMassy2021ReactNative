import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { actionsCreators } from "../../redux/store";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const onChangeEmail = (value) => {
    setEmail(value);
  };
  const onChangePassword = (value) => {
    setPassword(value);
  };
  const dispatch = useDispatch();

  const handleLogin = () => {
      dispatch(actionsCreators.setSignInAsync({username:'formateur1@gmail.com',password:'azerty'}));
  }

  return (
    <View style={styles.container}>
      <View style={styles.libelleInput}>
        <TextInput
          style={styles.libelleInput}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="adresse email"
          keyboardType="default"
        />
      </View>

      <View style={styles.libelleInput}>
        <TextInput
          style={styles.libelleInput}
          onChangeText={onChangePassword}
          value={password}
          placeholder="mot de passe"
          secureTextEntry={true}
          keyboardType="default"
        />
      </View>

      <TouchableOpacity
        style={styles.boutonValiderStyle}
        onPress={handleLogin}
      >
        <Text style={styles.buttonValiderText}>Connexion</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
		borderRadius: 12,
        backgroundColor:  "#0068bd",
		color: "#ffffff",
		fontSize: 18,
        margin: 6,
		padding:12,
    },
    libelleStyle: {
		borderRadius: 12,
        backgroundColor:  "#0068bd",
		color: "#ffffff",
		fontSize: 18,
        margin: 6,
		padding:12,
		flex:1,
    },
	libelleInput: {
		borderColor: '#0068bde5',
		borderRadius: 12,
		backgroundColor: '#dfecf7',
		padding:12,
    	margin:8,
	},
	buttonValiderText:{
		textAlign:'center',
		color:"white",
		fontWeight:'bold',
		fontSize:13
    },
	boutonValiderStyle: {
		backgroundColor: '#0068bd',
		color:'white',
		fontSize:20,
		fontWeight:'bold',
		padding: 15,
		borderRadius: 8,
		margin: 8,
		borderRadius: 26,
		borderColor: 'rgb(255, 255, 255)'
	},
});

