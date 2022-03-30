//import { useQuestionsContext } from "../../contexts/questions.context";

import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { actionsCreators } from '../../redux/store';

const Proposition = ({ proposition, idQuestion, idUtilisateurCourant }) => {
	const dispatch = useDispatch();
	//props = {todos: [{}, {}]}
	//const QuestionsContext = useQuestionsContext();
	function onPostReponse() {
		// QuestionsContext.postReponse({idAuteur:1,idQuestion:4,libelle:proposition.libelle});
		let reponse = new Object();
		reponse.idQuestion = idQuestion;
		reponse.libelle = proposition.libelle;
		reponse.idAuteur = idUtilisateurCourant;

		// Calls the thunk action creator, and passes the thunk function to dispatch
		dispatch(actionsCreators.addReponseAsync(reponse));
	}
	return (
		<View>
			<TouchableOpacity onPress={onPostReponse} style={styles.boutonStyle}>
				<Text style={styles.libelleReponse}>{proposition.libelle}</Text>
			</TouchableOpacity>
		</View>
	);
};
export default Proposition;

const styles = StyleSheet.create({
	boutonStyle: {
		backgroundColor: '#dfecf7',
		padding: 15,
		borderRadius: 8,
		margin: 8,
		borderRadius: 40,
		borderColor: 'rgb(255, 255, 255)'
	},
	libelleReponse: {
		color: '#0068bd',
		fontSize: 15,
		alignSelf: 'center',
		fontWeight: 'bold'
	}
});
