import { Button, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import QuestionList from '../components/sondages/QuestionList';

function SondagesScreen({navigation}) {
  
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
      <View style={styles.container}>

        <View style={styles.list}>
            <QuestionList></QuestionList>
        </View>

        <View style={styles.nav}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
              <Text style={styles.libelle}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('CreerSondageScreen')} style={styles.button}>
              <Text style={styles.libelle}>Creer un sondage</Text>
            </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#dfecf7",
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    flex: 1,
    backgroundColor: "#0068bd",
    flexDirection:'row',
    padding:0,
    margin:0,
    justifyContent:"space-between",
  },
  list: {
    flex: 10,
    backgroundColor: "#dfecf7",
    alignItems: 'center',
    flexDirection:'row',
  },
  button:{
    justifyContent:"center",
    flex:1,
		backgroundColor: '#0068bd',
		padding: 6,
		borderRadius: 12,
    margin:4,
	},
	libelle: {
		color: '#dfecf7',
		fontSize: 14,
		alignSelf: 'center',
		fontWeight: 'bold'
	}
});
export default SondagesScreen 