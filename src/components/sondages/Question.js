import { StyleSheet, Text, View } from "react-native";
//import { QuestionsProvider, useQuestionsContext } from "../../contexts/questions.context";
import PropositionList from "./PropositionList";
import QuestionTitle from "./QuestionTitle";
//import ReponseList from "./ReponseList";

const Question = ({question}) => { //props = {todos: [{}, {}]}
    //const questionsContext = useQuestionsContext();
    const currentUserId = 2;

    const isAutor = (currentUserId==question.idAuteur);
    var hasAnswered = false;
    
    question.reponses.forEach((reponse) => {
        if(currentUserId == reponse.idAuteur) hasAnswered=true;
        //console.log(reponse);
    })
    

    return (
        <View  style={styles.questionStyle}>
                <QuestionTitle question={question}></QuestionTitle> 
            <div>
                <div>
                        {!isAutor  && !hasAnswered
                         ? <PropositionList propositions={question.propositions}/>
                        : null /*<ReponseList list={question.reponses}/>*/}
                </div>
            </div>
        </View>

    )
}

export default Question;

const styles = StyleSheet.create({
    questionStyle: {
        margin: 4,
        borderWidth:3,
        borderColor:"#0068bde5",
        borderRadius: 15,
        padding: 3,
        alignContent: "center",
        backgroundColor: "#bfd9ef",
        flexDirection: "column"
      }
  })