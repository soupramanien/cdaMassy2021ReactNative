import { Button, StyleSheet, Text, View } from 'react-native'

function HomeScreen(props) {
  const navigation = props.navigation;
  
  return (
    <View style= {styles.container}>
    <Text >Home Screen</Text>
    <Button 
      title='Go to Sondages' 
      onPress={()=>navigation.navigate("SondagesScreen", {
        canalId : 1,
        currentUserId: 1
      })}
    />
    <Button 
      title='Les EFGs' 
      onPress={()=>navigation.navigate("EFGScreens")}
    />
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
export default HomeScreen 