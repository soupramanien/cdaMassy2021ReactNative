import { Text, View ,FlatList} from 'react-native'

function EFGScreens({navigation, route}) {

  const data = [
    {
      idCanal : 1,
      nom : "truc" 
    },
    {
      idCanal : 2,
      nom : "bidule"
    }
  ]
  
    return (
      <View>
          <Text>EFGScreens</Text>
          <FlatList
              data={data}
              keyExtractor={(machin)=>String(machin.idCanal)}
              renderItem = {({item})=>(<Text>coucou {item.nom}</Text>)}
          />
      </View>
    )
}
export default EFGScreens;