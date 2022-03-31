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

    const formateur = {
        idPersonne : 1,
        prenom : "Tryphon",
        nom : "Tournesol",
        email : "formateur1@gmail.com",
        tel : "0601020304",
        pwd : "azerty",
        est_formateur : 1,
        est_gestionnaire : 0,
        est_administrateur : 0,
        allCanauxMembre : null
    }

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
                        formateur={formateur}/>
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
