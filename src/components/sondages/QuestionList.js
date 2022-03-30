import Question from "./Question";
import { useEffect, useState, useCallback } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native"
import { useSelector, useDispatch } from "react-redux";
import { actionsCreators } from "../../redux/store";

function QuestionsList({canalId}) {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading)
    const idCanalSelectionne = useSelector(state => state.canal.idCanalSelectionne);
    const questions = useSelector(state => state.question.questions);
    
    const loadQuestions = (idCanalSelectionne) => {
      // Calls the thunk action creator, and passes the thunk function to dispatch
      dispatch(actionsCreators.loadQuestionsAsync(idCanalSelectionne));
    }


    useEffect(() => {
      loadQuestions(idCanalSelectionne);
    }, []);

    return (
      <View>
        {loading &&<Text>loading...</Text>}
        <FlatList style={styles.questionList} 
        data={questions}
        keyExtractor={question => String(question.idQuestion)}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <Question style={styles.item}  question={item} />
        )}
        refreshing={loading}
        onRefresh={loadQuestions}
        />
      </View>

    )
  }
  export default QuestionsList

  const styles = StyleSheet.create({
    questionList: {
        borderRadius: 12,
        textAlign: "left",
        alignContent: "center",
        color: "#292929",
        backgroundColor: "#dfecf7",
        borderColor: "#4e4e4e",
        flexDirection: "column"
      },
      container: {
        flex: 1,
      },
      item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
  })