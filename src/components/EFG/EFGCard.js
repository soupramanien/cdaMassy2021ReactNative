import { Button, StyleSheet, Text, View } from 'react-native';

export default function EFGCard(props){
    return(
        <>
            {props.isEFGScreen && (
                <View style={styles.item}>
                    <Text>Exercice n°{props.efg.idEfg} : {props.efg.intitule}</Text>
                    <Text>Formateur : {props.formateur.prenom} {props.formateur.nom}</Text>
                </View>
            )}

            {!props.isEFGScreen && (
                <View style={styles.item}>
                    <Text>Exercice n°{props.efg.idEfg} : {props.efg.intitule}</Text>
                    <Text>Groupes : {props.efg.groupes} </Text>
                </View>
            )}
            
        </>
    )
}

const styles = StyleSheet.create({
    item : {
        padding: 16,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
      }
})