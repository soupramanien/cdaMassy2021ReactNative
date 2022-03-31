import { Button, StyleSheet, Text, View } from 'react-native';

export default function EFGCard({efg,formateur}){
    return(
        <View style={styles.item}>
            <Text>Exercice n°{efg.idEfg} : {efg.intitule}</Text>
            <Text>Formateur : {formateur.prenom} {formateur.nom}</Text>
        </View>
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