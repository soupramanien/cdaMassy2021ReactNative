import React, { useEffect } from 'react';
import { useState } from 'react';
import {  ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {  TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { actionsCreators } from '../../redux/store';

const ReponseForm = ({idQuestion}) => {
	const dispatch = useDispatch();
	const [isError, setIsError] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [message, setMessage] = useState('');
	const idUtilisateurCourant = useSelector((state) => state.reducer.utilisateur.idUtilisateurCourant);

	// pour premiere partie Libelle
	const [ libelle, setLibelle ] = React.useState('');
	const onChangeLibelle = (libelle) => {
		setLibelle(libelle);
	};

	useEffect(() => {
	}, [])
	

	function isReponseValid(){
		let isValid = true;
		if(libelle.length==0 || libelle.length>255){
			setMessage("Votre reponse doit faire entre 1 et 255 characteres");
			isValid = false;
		}
		return isValid;
	}
	//handle submit question
	function onPostReponse() {
		if(isReponseValid())
		{
			let reponse = new Object();
			reponse.libelle = libelle;
			reponse.idAuteur = idUtilisateurCourant;
			reponse.idQuestion = idQuestion;
			console.log(reponse);
			// Calls the thunk action creator, and passes the thunk function to dispatch
			dispatch(actionsCreators.addReponseAsync(reponse));
			setLibelle('');
			setIsSuccess(true);
			setIsError(false);
			setMessage('Reponse envoyée !');
		}
		else{
			setIsError(true);
		}
    }

	return (
        <ScrollView containerstyle={styles.ReponseForm}>
            <View  style={styles.libelleStyle}>
                <Text style={styles.title}> Votre  reponse:</Text>
                <View style={styles.libelleInput}>
                    <TextInput
                        multiline
                        numberOfLines={5}
                        style={styles.input}
                        onChangeText={onChangeLibelle}
                        value={libelle}
                        placeholder="Ecrivez votre réponse:"
                        keyboardType="default"
                    />
                </View>
            {isError && <Text style={styles.errorMessage}>{message}</Text>}
            {isSuccess && <Text style={styles.successMessage}>{message}</Text>}
            <TouchableOpacity style={styles.boutonValiderStyle}onPress={onPostReponse}>
                    <Text style={styles.buttonValiderText}>Envoyer Reponse</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
	);
};

const styles = StyleSheet.create({
	input:{
		color: "#004176",
		fontSize: 15,
		padding:8,
	},
	title:{
		color: "#ffffff",
		fontSize: 12,
        flex:1,
		paddingTop:3,
        marginLeft:10,
	},
	errorMessage:{
		color: "red",
		fontSize: 12,
		textAlign:'center',
		fontWeight:'bold',
		flex:1,
		paddingBottom:10,
	},
	successMessage:{
		color: "green",
		fontSize: 12,
		textAlign:'center',
		fontWeight:'bold',
		flex:1,
		paddingBottom:10,
	},
    libelleStyle: {
		borderRadius: 12,
        backgroundColor:  "#60a1d6",
		color: "#ffffff",
		fontSize: 18,
        margin: 3,
		padding:6,
		flex:1,
    },
	libelleInput: {
		borderColor: '#0068bde5',
		borderRadius: 12,
		backgroundColor: '#dfecf7',
		padding:12,
    	margin:8,
	},
	screenStyle: {
		alignItems:"center",
	},
	ReponseForm: {
		alignItems:"center",
		borderRadius: 16,
		margin: 0,
		padding: 3,
	},
	buttonValiderText:{
		textAlign:'center',
        color:"#0068bd",
		fontWeight:'bold',
		fontSize:13
	},
	boutonValiderStyle: {
		backgroundColor: '#dfecf7',
		fontSize:20,
		fontWeight:'bold',
		padding: 14,
		borderRadius: 8,
		margin: 3,
        marginRight:70,
        marginLeft:70,
		borderRadius: 26,
	},
});

export default ReponseForm;
