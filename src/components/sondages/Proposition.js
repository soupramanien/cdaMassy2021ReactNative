//import { useQuestionsContext } from "../../contexts/questions.context";

import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Proposition = ({ proposition }) => {
	//props = {todos: [{}, {}]}
	//const QuestionsContext = useQuestionsContext();
	function postQuestion() {
		// QuestionsContext.postReponse({idAuteur:1,idQuestion:4,libelle:proposition.libelle});
	}
	return (
		<View>
			<TouchableOpacity /*onPress={onPress}*/ style={styles.boutonStyle}>
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
