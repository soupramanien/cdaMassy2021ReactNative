import { useState,useEffect } from 'react'
import {Button, View ,FlatList,StyleSheet,Text} from 'react-native'
import EFGCard from '../../components/EFG/EFGCard'
import EFGServices from '../../fetch/EFGfetch'

export default function EFGListScreen({navigation,route}){

    const canalId = route.params.idCanal;
    const [nombreMembres,setNombreMembres] = useState(route.params.membres);
    const [efgs,setEfgs] = useState([])

    useEffect(()=>{
        EFGServices.getAllEFGs(setEfgs,canalId);
        EFGServices.getNombreMembres(setNombreMembres,canalId);
    },[canalId])

    return (
        
        <View style={styles.container}>
            {efgs.length > 0 && (
                <FlatList 
                data={efgs}
                keyExtractor={(efg)=>(String(efg.idEfg))}
                renderItem={(efgs)=>(
                    <View style ={styles.item}>
                        <EFGCard efg={efgs.item} isEFGScreen={false}/>
                        <Button 
                            title="voir l'exercice" 
                            onPress={()=>navigation.navigate("EFGDetailScreen",{idEfg : efgs.item.idEfg})}
                        />
                    </View>
                )}/>
            )}

            {efgs.length === 0 && (
                <Text> Il n' y a aucun exercice dans ce Canal</Text>
            )}
            
            { (nombreMembres < 5 || nombreMembres === undefined || nombreMembres === null) && (
                <Text> Veuillez rajouter des élèves dans votre canal pour pouvoir créer un
                exercice.</Text>
            )}

            {(nombreMembres >= 5) && (<Button
				title='Créer un EFG'
				onPress={() => navigation.navigate('EFGAddScreen', {})}
			    />)}
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
