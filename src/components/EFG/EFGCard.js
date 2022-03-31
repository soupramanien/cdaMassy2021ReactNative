import { Button, StyleSheet, Text, View } from 'react-native';

export default function EFGCard({efg,formateur,navigation,isEFGScreen}){

    return(
        <>
            {isEFGScreen && (
                <>
                    <Text>Exercice n°{efg.idEfg} : {efg.intitule}</Text>
                    <Text>Formateur : {formateur.prenom} {formateur.nom}</Text>
                </>
            )}

            {!isEFGScreen && (
                <>
                    <Text>Exercice n°{efg.idEfg} : {efg.intitule}</Text>
                    <Text>Groupes : {efg.groupes} </Text>
                </>
            )}
            
        </>
    )
}
