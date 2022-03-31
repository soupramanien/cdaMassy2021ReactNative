import { useState,useEffect } from 'react'
import { Text, View ,FlatList,StyleSheet} from 'react-native'
import EFGCard from '../../components/EFG/EFGCard'
import EFGServices from '../../fetch/EFGfetch'

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

    useEffect(()=>{
        EFGServices.getAllEFGs((efgs)=>{setEfgs(efgs)},route.params.idCanal);
    },[])

    return (
        <View style={styles.container}>
            <FlatList 
                data={efgs}
                keyExtractor={(efg)=>(String(efg.idEfg))}
                renderItem={(efgs)=>(
                    <EFGCard efg={efgs.item} 
                        isEFGScreen={false}/>
                )}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
