import Question from "./Question";
import { useEffect, useState, useCallback } from "react";
import { Alert, FlatList, Image, Modal, Pressable, StyleSheet, Text, View } from "react-native"
import { useDispatch,  useSelector  } from "react-redux";
import { actionsCreators } from "../../redux/store";

// const QuestionList = ({list}) => {//props = {todos: [{}, {}]}
//     // const onAddQuestionPress = () => dispatch(actionCreators.setAddQuestionMode(true))
//     return (
//         <View>
//             <div>
//                 {list.map((question) => {
//                     return <Question key={question.idQuestion.toString()} question={question} />
//                 })}
//             </div>
//             {/* <Button title="Add new question" onPress={onAddQuestionPress} /> */}
//         </View>
//     )
// }

// static getEFG(props, idEFG) {
//     fetch(`http://localhost:8080/cdamassy2021/api/1/EFGs/${idEFG}`)
//         .then((response) => response.json())
//         .then((data) => {
//             props(data);
//         })
//         .catch((error) => error);
// }

function QuestionsList({canalId}) {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const loadQuestions = useCallback(async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:8080/cdamassy2021/api/question/bycanal/"+canalId);
        const newQuestions = await res.json();
        setQuestions(newQuestions);
      } catch (error) {
        alert("Network Error");
      }
      setLoading(false);
    }, [])
    //componentDidMount
    useEffect(() => {
      loadQuestions();
    }, []);

    return (
      <FlatList style={styles.questionList} 
        data={questions}
        keyExtractor={question => String(question.idQuestion)}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <Question question={item} />
        )}
        refreshing={loading}
        onRefresh={loadQuestions}
      />
    )
  }
  export default QuestionsList

  const styles = StyleSheet.create({
    questionList: {
        margin: "12px",
        borderRadius: "15px",
        fontFamily: "Roboto",
        textAlign: "left",
        alignContent: "center",
        color: "#292929",
        backgroundColor: "#a2d3fc4d",
        borderColor: "#4e4e4e",
        flexDirection: "column"
      },
      container:{
          justifyContent:"space-between"
      }
  })