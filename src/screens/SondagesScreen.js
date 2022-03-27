import { Button, StyleSheet, Text, View } from 'react-native'

function SondagesScreen({navigation, route}) {
    const {canalId, currentUserId} = route.params;//{itemId: 50, otherParam: "abc"}
  
  return (
    <View style={styles.container}>
        <Text>Sondages Screen</Text>
        <Text>Selected canal : {canalId}</Text>
        <Text>currentUserId: {currentUserId}</Text>
        <Button title='Go to Home' onPress={()=>navigation.goBack()}/>
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