import { StyleSheet, Text,Button} from 'react-native';

export default function EFGCard({efg,formateur,isEFGScreen}){

    return(
        <>
            {isEFGScreen && (
                <>
                    <Text>Exercice n°{efg.idEfg} : {efg.intitule}</Text>
                    <Text>Formateur : {formateur.prenom} {formateur.nom}</Text>
                    <Button title='modifier groupes'/>
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
