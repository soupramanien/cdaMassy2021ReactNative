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
        padding: 12,
        margin: "3px 0px",
        borderRadius: 10,
        width:"inherit"
    },
    libelleQuestion: {
        color: "#ffffff",
        fontFamily: "Roboto",
        textAlign: "left",
        fontStyle: "bold",
        fontSize: 20
    },
    nomAuteur: {
        color:  "#bfd9ef",
        fontFamily: "Roboto",
        textAlign: "left",
        fontStyle: "italic",
        fontSize: "15px",
        padding: 4,
        margin: "3px 0px"
    }
  })
export default QuestionTitle;