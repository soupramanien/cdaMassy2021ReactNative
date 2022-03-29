import { useEffect, useState } from 'react';
import { Text, View ,FlatList,TouchableOpacity} from 'react-native'
import EFGServices from '../../fetch/EFGfetch';

function EFGScreens({navigation, route}) {

    const [canaux,setCanaux] = useState([
      {
        idCanal : 1,
        nom : "truc" 
      },
      {
        idCanal : 2,
        nom : "bidule"
      }
    ]);

    useEffect(()=>{
      EFGServices.getCanaux((canaux)=>setCanaux(canaux),1)
    },[]);
  
    return (
      <View>
          <Text>EFGScreens</Text>
          <FlatList
              data={canaux}
              keyExtractor={(canal)=>String(canal.idCanal)}
              renderItem = {({item})=>(
                  <TouchableOpacity>
                      <Text>exercices du Canal {item.nom}</Text>
                  </TouchableOpacity>
              )}
          />
      </View>
    )
}
export default EFGScreens;