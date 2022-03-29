import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import PropositionList from './PropositionList';
import QuestionTitle from './QuestionTitle';
import ReponseList from './ReponseList';

const Question = ({ question }) => {
	//props = {todos: [{}, {}]}
	//const questionsContext = useQuestionsContext();
	const idUtilisateurCourant = useSelector(
		// Thomas, Kamal, Ben et Vinoth : c'est ici qu'on changé une ligne. On a juste rajouté ".reducer" après votre state pour que cela fonctionne. On passe donc à state.reducer.utilisateur.idUtilisateurCourant Bisous, la teamVerte !
		(state) => state.reducer.utilisateur.idUtilisateurCourant
	);
	const isAutor = idUtilisateurCourant == question.idAuteur;
	var hasAnswered = false;

	question.reponses.forEach((reponse) => {
		if (idUtilisateurCourant == reponse.idAuteur) hasAnswered = true;
	});

	return (
		<View style={styles.questionStyle}>
			<QuestionTitle question={question}></QuestionTitle>
			<View>
				{!isAutor && !hasAnswered ? (
					<PropositionList propositions={question.propositions} />
				) : (
					<ReponseList reponses={question.reponses} />
				)}
			</View>
		</View>
	);
};

export default Question;

const styles = StyleSheet.create({
	questionStyle: {
		margin: 4,
		borderWidth: 3,
		borderColor: '#0068bde5',
		borderRadius: 15,
		padding: 3,
		alignContent: 'center',
		backgroundColor: '#bfd9ef',
		flexDirection: 'column',
	},
});
