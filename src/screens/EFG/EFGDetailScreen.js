import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import EFGCard from '../../components/EFG/EFGCard';
import EFGServices from '../../fetch/EFGfetch';

export default function EFGDetailScreen({route}){

    const [efg,setEFG] = useState(route.params.efg);
    const [formateur,setFormateur] = useState({
        idPersonne : 0,
        prenom : "",
        nom : "",
        email : "",
        tel : "",
        pwd : "",
        est_formateur : 1,
        est_gestionnaire : 0,
        est_administrateur : 0,
        allCanauxMembre : null
    });

    useEffect(()=>{
        EFGServices.getCreator((formateur)=>{setFormateur(formateur)}
            ,efg.idEfg)
        }
    ,[])

    return(
        <>
            <View style={styles.container}>
                <Text> EFG DetailScreen here soon !</Text>
                <EFGCard efg={efg} formateur={formateur} isEFGScreen={true}/>
            </View>
        </>
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