import { useState } from 'react'
import { Text, View ,FlatList,StyleSheet} from 'react-native'

export default function EFGListScreen({route}){

    const [efgs,setEfgs] = useState([
        {
			idEfg: 1,
			createur: {
				idCanal: 1,
				idPersonne: 1,
			},
			intitule: 'TP définir objectif',
			groupes: '2,3',
			idCanal: 1,
			idCreateur: 1,
		},
		{
			idEfg: 2,
			createur: {
				idCanal: 1,
				idPersonne: 2,
			},
			intitule: 'TP définir but',
			groupes: '2,2,3',
			idCanal: 1,
			idCreateur: 2,
		}
    ])

    return (
        <View style={styles.container}>
            <FlatList 
                data={efgs}
                keyExtractor={(efg)=>(String(efg.idEfg))}
                renderItem={(efgs)=>(

                    // a remplacer par <EFGCard efg={efg}/>
                    <View style={styles.item}>
                        <Text>{efgs.item.intitule}</Text>
                        <Text>cree par :{efgs.item.createur.idPersonne}</Text>
                        <Text>groupes :{efgs.item.groupes}</Text>
                    </View>)}/>
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
    item : {
        padding: 16,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
      }
  });
