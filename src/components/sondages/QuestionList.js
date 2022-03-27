import Question from "./Question";
import { useEffect, useState, useCallback } from "react";
import { FlatList, StyleSheet} from "react-native"

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