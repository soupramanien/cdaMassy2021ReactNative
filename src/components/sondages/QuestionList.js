import Question from "./Question";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Text} from "react-native"
import { useSelector, useDispatch } from "react-redux";
import { selectAllQuestions, fetchQuestions } from "../../redux/slices/questionsSlice";


function QuestionsList() {
    const dispatch = useDispatch();
    const questions = useSelector(selectAllQuestions)
    const questionsStatus = useSelector(state => state.questions.status)
    const error = useSelector(state => state.questions.error)


    useEffect(() => {
      if (questionsStatus === 'idle') {
        dispatch(fetchQuestions())
      }
    }, [questionsStatus, dispatch]);

    return (
      <View>
        <Text>{questionsStatus}</Text>
        <FlatList style={styles.questionList} 
          data={questions}
          keyExtractor={question => String(question.idQuestion)}
          contentContainerStyle={styles.container}
          renderItem={({ item }) => (
            <Question style={styles.item}  question={item} />
          )}
          //refreshing={loading}
        // onRefresh={loadQuestions}
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