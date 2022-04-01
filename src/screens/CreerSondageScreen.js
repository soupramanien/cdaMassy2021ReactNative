import { Button, StyleSheet, Text, View } from 'react-native'
import QuestionForm from '../components/sondages/QuestionForm';


function CreerSondageScreen({navigation, route}) {
    const {canalId, currentUserId} = route.params;//{itemId: 50, otherParam: "abc"}
  
  return (
    <View style={styles.container}>
        <QuestionForm canalId={canalId}></QuestionForm>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfecf7",
    alignItems: 'center',
  },
});
export default CreerSondageScreen 