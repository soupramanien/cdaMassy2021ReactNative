//import { useQuestionsContext } from "../../contexts/questions.context";

import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Proposition = ({proposition}) => { //props = {todos: [{}, {}]}
    //const QuestionsContext = useQuestionsContext();
    function postQuestion(){
       // QuestionsContext.postReponse({idAuteur:1,idQuestion:4,libelle:proposition.libelle});
    }
    return (
        <View>
            <TouchableOpacity /*onPress={onPress}*/ style={styles.boutonStyle} >
                <Text  style={styles.libelleReponse}>{proposition.libelle}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Proposition;

const styles = StyleSheet.create({
    boutonStyle: {
        // backgroundColor: "#dfecf7",
        // padding: 12,
        // borderRadius: 8,
        // margin: 6,
        // cursor: "pointer",
        // alignSelf: "inherit",
        // borderWidth:1,
        // borderColor:"rgb(255, 255, 255)",
      },
    libelleReponse: {
        // color: "#0068bd",
        // fontSize: 15,
        // fontFamily:"Roboto",
        // fontStyle: "bold",
        // alignSelf:"center"
    }
  })

