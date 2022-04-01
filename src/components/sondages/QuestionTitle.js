//import { QuestionsProvider, useQuestions } from "../../contexts/questions.context";

import { StyleSheet, Text, View } from "react-native";


const QuestionTitle = ({question}) => { //props = {todos: [{}, {}]}
    return (
        <View style={styles.titleStyle}>
            <Text style={styles.libelleQuestion}> {question.libelle}</Text>
            <Text style={styles.nomAuteur}> {question.nomAuteur}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    titleStyle: {
        backgroundColor:  "#0068bd",
        color: "rgb(255, 255, 255)",
        padding: 8,
        margin: 2,
        borderRadius: 10
    },
    libelleQuestion: {
        fontWeight:'bold',
        color: "#ffffff",
        textAlign: "left",
        fontSize: 16
    },
    nomAuteur: {
        color:  "#bfd9ef",
        textAlign: "left",
        fontStyle: "italic",
        fontSize: 12,
        marginLeft: 6
    }
  })
export default QuestionTitle;