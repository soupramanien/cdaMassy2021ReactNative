import { StyleSheet, Text, View } from "react-native";
//import { QuestionsProvider, useQuestionsContext } from "../../contexts/questions.context";
//import PropositionList from "./PropositionList";
import QuestionTitle from "./QuestionTitle";
//import ReponseList from "./ReponseList";

const Question = ({question}) => { //props = {todos: [{}, {}]}
    //const questionsContext = useQuestionsContext();
    const currentUserId = 1;

    const isAutor = (currentUserId==question.idAuteur);
    var hasAnswered = false;
    
    question.reponses.forEach((reponse) => {
        if(currentUserId == reponse.idAuteur) hasAnswered=true;
        //console.log(reponse);
    })
    

    return (
        <View>
                <QuestionTitle style={styles.questionStyle} question={question}></QuestionTitle> 
            <div>
                <div>
                        {!isAutor  && !hasAnswered
                         ? null/*<PropositionList list={question.propositions}/>*/
                        : null /*<ReponseList list={question.reponses}/>*/}
                </div>
            </div>
        </View>

    )
}

export default Question;

const styles = StyleSheet.create({
    questionStyle: {
        margin: "12px",
        borderRadius: "15px",
        padding: "8px",
        alignContent: "center",
        backgroundColor: "#a2d3fc4d",
        flexDirection: "column"
      }
  })