import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import EFGCard from '../../components/EFG/EFGCard';
import EFGNotFound from '../../components/EFG/EFGNotFound';
import EFGServices from '../../fetch/EFGfetch';

export default function EFGDetailScreen({route}){

    const [efg,setEFG] = useState({});
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
        EFGServices.getEFG(setEFG,route.params.idEfg)
        EFGServices.getCreator(setFormateur,route.params.idEfg)
        }
    ,[])

    return(
            <View style={styles.container}>
                {efg.idEfg === route.params.idEfg && (
                     <>
                        <EFGCard efg={efg} formateur={formateur} isEFGScreen={true}/>
                        {/* COMPOSANT GROUPE */}
                    </>
                )}
                
                {efg.idEfg !== route.params.idEfg && <EFGNotFound/> }
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