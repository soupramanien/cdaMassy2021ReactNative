import { Button, StyleSheet, Text, View } from 'react-native'
import QuestionForm from '../components/sondages/QuestionForm';


function CreerSondageScreen({navigation, route}) {
    const {canalId, currentUserId} = route.params;//{itemId: 50, otherParam: "abc"}
  
  return (
    <View style={styles.container}>
        <Text>Creer Sondage Screen</Text>
        <Text>Selected canal : {canalId}</Text>
        <Text>currentUserId: {currentUserId}</Text>
        <Button title='Go Back' onPress={()=>navigation.goBack()}/>

        <QuestionForm canalId={canalId}></QuestionForm>

        
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CreerSondageScreen 