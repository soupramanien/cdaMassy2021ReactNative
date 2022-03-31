import Question from './Question';
import { useEffect, useState, useCallback } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { actionsCreators } from '../../redux/store';

function QuestionsList({ canalId }) {
	const dispatch = useDispatch();
	// Changé ici aussi : state.reducer.loading
	const loading = useSelector((state) => state.reducer.loading);
	// Thomas, Kamal, Ben et Vinoth : c'est ici qu'on changé une ligne. On a juste rajouté ".reducer" après votre state pour que cela fonctionne. On passe donc à state.reducer.canal.idCanalSelectionne Bisous, la teamVerte !
	const idCanalSelectionne = useSelector((state) => state.reducer.canal.idCanalSelectionne);
	// Idem ici. state.reducer.question.questions
	const questions = useSelector((state) => state.reducer.question.questions);

	const loadQuestions = (idCanalSelectionne) => {
		// Calls the thunk action creator, and passes the thunk function to dispatch
		dispatch(actionsCreators.loadQuestionsAsync(idCanalSelectionne));
	};

	useEffect(() => {
		loadQuestions(idCanalSelectionne);
	}, []);

	return (
		<View>
			{loading && <Text>loading...</Text>}

			<FlatList
				style={styles.questionList}
				data={questions}
				keyExtractor={(question) => String(question.idQuestion)}
				contentContainerStyle={styles.container}
				renderItem={({ item }) => <Question style={styles.item} question={item} />}
				refreshing={loading}
				onRefresh={loadQuestions}
				showsVerticalScrollIndicator={true}
				vertical
			/>
		</View>
	);
}
export default QuestionsList;

const styles = StyleSheet.create({
	questionList: {
		borderRadius: 12,
		textAlign: 'left',
		alignContent: 'center',
		color: '#292929',
		backgroundColor: '#dfecf7',
		borderColor: '#4e4e4e',
		flexDirection: 'column'
	},
	container: {},
	item: {
	},
	title: {
		fontSize: 32
	}
});
