import { Button, StyleSheet, Text, View } from 'react-native'
import QuestionList from '../components/sondages/QuestionList';

function SondagesScreen({navigation}) {
  
  return (
    <View style={styles.container}>
        <Text>Sondages Screen</Text>
        <Button title='Go to Home' onPress={()=>navigation.goBack()}/>
        <Button title='Creer Sondage' onPress={()=>navigation.navigate('CreerSondageScreen')}/>
        <QuestionList></QuestionList>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfecf7",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SondagesScreen 