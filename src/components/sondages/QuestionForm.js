import React, { useEffect } from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import { SafeAreaView, TextInput } from 'react-native';
import { Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { actionsCreators } from '../../redux/store';
import PropositionForm from './PropositionForm';

const QuestionForm = () => {
	const dispatch = useDispatch();
	const idCanalSelectionne = useSelector((state) => state.reducer.canal.idCanalSelectionne);
	const idUtilisateurCourant = useSelector((state) => state.reducer.utilisateur.idUtilisateurCourant);
	// pour premiere partie Libelle
	const [ libelle, setLibelle ] = React.useState('');
	const [ propId, setPropId ] = React.useState(0);
	const onChangeLibelle = (libelle) => {
		setLibelle(libelle);
	};
	// pour la deuximeme partie Propositions
	const [ propositions, setPropositions ] = useState([  ]);
	const onPress = () => {
		setPropId(propId + 1);
	};

	useEffect(() => {
		console.log(propId);
		if(propId!=0)setPropositions((propositions) => [ ...propositions, { propId, libelle: '', etat: 'indéfinie' } ]);
	}, [propId])
	

	
	//handle submit question
	function onPostQuestion() {
		let question = new Object();
		question.libelle = libelle;
		question.idAuteur = idUtilisateurCourant;
		question.idCanal = idCanalSelectionne;
		question.propositions = propositions.map((prop)=>{
			const propositionDto = {libelle:prop.libelle};
			switch(prop.etat){
				case 'incorrecte':
				    return {...propositionDto,estCorrecte:0};
				case 'correcte':
					return {...propositionDto,estCorrecte:1};
				case 'indéfinie':
					return {...propositionDto,estCorrecte:2};
				default:
					break;
			}
		});
		console.log(question);

		// Calls the thunk action creator, and passes the thunk function to dispatch
        dispatch(actionsCreators.addQuestionAsync(question));

		setLibelle('');
		setPropositions([]);
		setPropId(0);
	}
  const handlePropositionChangeCallBack = (updatedProposition) => {
	// function handlePropositionChangeCallBack() {
		setPropositions((propositions) => propositions = propositions.map((prop)=>(prop.propId == updatedProposition.propId) 	// trouver la question pour laquelle (id == action.value.idQuestion) 
		? updatedProposition				// et ajouter action.value (la reponse) à sa liste de réponses
		: prop))
	}

	useEffect(() => {
		console.log(JSON.stringify(propositions));
	}, [propositions]);
	

	return (
		<ScrollView contentContainerStyle={styles.screenStyle}>
			 <View style={styles.QuestionForm}>
				 <View  style={styles.libelleStyle}>
					<Text style={styles.title}> Nouveau sondage:</Text>
					<Text style={styles.libelleLabel} > Ecrivez votre question:</Text>
					<View style={styles.libelleInput}>
						
						<TextInput
							multiline
							numberOfLines={5}
							style={styles.input}
							onChangeText={onChangeLibelle}
							value={libelle}
							placeholder="Ecrivez votre question"
							keyboardType="default"
						/>
					</View>
				 </View>

				<View >
					{/* <Text style={styles.baseText}>PROPOSITIONS</Text> */}
					{propositions.map((proposition) => (
						<PropositionForm
							key={proposition.propId}
							libelle={proposition}
							etat={proposition.etat}
							propId={proposition.propId}
							onclick={() => onPostQuestion(question.propositions)}
              				callBack={handlePropositionChangeCallBack}
						/>
					))}
				</View>
				<TouchableOpacity style={styles.boutonStyle} onPress={onPress}>
						<Text style={styles.buttonText}> Ajouter proposition</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.boutonValiderStyle}onPress={onPostQuestion}>
						<Text style={styles.buttonValiderText}>Valider sondage</Text>
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
		fontSize: 18,
		fontWeight:'bold',
		width:256,
		paddingBottom:10,
	},
	libelleLabel:{
		color: "#ffffff",
		fontSize: 12,
		padding:3,
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
	screenStyle: {
		alignItems:"center",
	},
	QuestionForm: {
		alignItems:"center",
		borderRadius: 16,
		margin: 20,
		padding: 10,
		borderWidth:3,
		borderColor:'#0068bd',
        backgroundColor:  "#bfd9ef",
	},

	buttonText:{
		textAlign:'center',
		color:"#0068bd",
		fontWeight:'bold',
		fontSize:12
	},
	buttonValiderText:{
		textAlign:'center',
		color:"white",
		fontWeight:'bold',
		fontSize:13
	},
	boutonStyle: {
		backgroundColor: '#dfecf7',
		color:'#0068bd',
		fontSize:20,
		fontWeight:'bold',
		padding: 15,
		borderRadius: 8,
		margin: 8,
		borderRadius: 26,
		borderColor: 'rgb(255, 255, 255)'
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

export default QuestionForm;
