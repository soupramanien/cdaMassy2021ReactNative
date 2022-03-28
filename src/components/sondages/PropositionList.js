import { FlatList, StyleSheet, Text, View } from "react-native";
import Proposition from "./Proposition";

const PropositionList = ({propositions}) => {//props = {todos: [{}, {}]}
    // const onAddQuestionPress = () => dispatch(actionCreators.setAddQuestionMode(true))
    const isNoProposition = (propositions.length <1);
    return (
        <View>
            <div>
                {isNoProposition?
                    <Text value="- Text-Input here - "> 
                        {/* <form class="input_form">
                            <input type="text" class="input_form__field" placeholder="Réponse" />
                            <button type="button" class="input_btn input_btn--primary input_btn--inside input_uppercase">Envoyer</button>
                        </form> */}
                    </Text>
                     : <FlatList style={styles.propositionsList} 
                            data={propositions}
                            keyExtractor={proposition => String(proposition.idProposition)}
                            contentContainerStyle={styles.container}
                            renderItem={({ item }) => (
                                <Proposition proposition={item} />
                            )}
                            //refreshing={loading}
                            //onRefresh={loadQuestions}
                        />
                }
            </div>
        </View>
    )
}

export default PropositionList;


  const styles = StyleSheet.create({
    propositionsList: {
        // margin: 3,
        // borderRadius: "15px",
        // fontFamily: "Roboto",
        // textAlign: "left",
        // alignContent: "center",
        // color: "#292929",
        // flexDirection: "column"
      },
      container:{
        //   justifyContent:"space-between"
      }
  })