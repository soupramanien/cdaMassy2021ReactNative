import { Button, StyleSheet, Text, View } from 'react-native'
import QuestionList from '../components/sondages/QuestionList';

function SondagesScreen({navigation, route}) {
  
  return (
    <View style={styles.container}>
        <Text>Sondages Screen</Text>
        <Button title='Go to Home' onPress={()=>navigation.goBack()}/>
        <QuestionList></QuestionList>
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
export default SondagesScreen 