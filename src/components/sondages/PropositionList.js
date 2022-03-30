import { FlatList, StyleSheet, Text, View } from "react-native";
import Proposition from "./Proposition";

const PropositionList = ({propositions}) => {
    const isNoProposition = (propositions.length <1);
    return (
        <View>
            {isNoProposition?
                <Text value="- Text-Input here - "> 
                    {/* <form class="input_form">
                        <input type="text" class="input_form__field" placeholder="Réponse" />
                        <button type="button" class="input_btn input_btn--primary input_btn--inside input_uppercase">Envoyer</button>
                    </form> */}
                </Text>
                    : <View>
                        <Text style={styles.info}> Votre réponse: </Text>
                        <FlatList style={styles.propositionsList} 
                        data={propositions}
                        keyExtractor={proposition => String(proposition.idProposition)}
                        contentContainerStyle={styles.container}
                        renderItem={({ item }) => (
                            <Proposition proposition={item} />
                        )}
                        //refreshing={loading}
                        //onRefresh={loadQuestions}
                    />
                    </View>

            }
        </View>
    )
}

export default PropositionList;


  const styles = StyleSheet.create({
    propositionsList: {
        borderRadius: 15,
        textAlign: "left",
        alignContent: "center",
        color: "#292929",
        flexDirection: "column"
      },
      container:{
        //   justifyContent:"space-between"
      },
      info: {
        color: "#0068bd",
        fontSize: 10,
        textAlign:"left",
        marginLeft: 6,
        fontWeight:"bold"
    }
  })