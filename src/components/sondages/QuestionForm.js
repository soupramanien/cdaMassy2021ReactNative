import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom';
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView, TextInput } from 'react-native';
import { Button } from 'react-native';
import PropositionForm from './PropositionForm';


const QuestionForm = () => {
  // pour premiere partie Libelle
      const [libelle, setLibelle] = React.useState('');
      const [propId, setPropId] = React.useState(0);
      const onChangeLibelle = (libelle) => {
        setLibelle(libelle);
      }
  // pour la deuximeme partie Propositions
      const [propositions, setPropositions] = useState([{propId:propId, libelle: "", etat: "correcte"}]);
      const onPress = () => {
        let newId = propId +1;
        setPropId(newId);
        console.log(propId);
        setPropositions((propositions) => [...propositions, {propId:newId, libelle: "", etat: "correcte" }])
      }
  
  // pour la partie SUBMIT
        const handleSubmit = (event) => {
          event.preventDefault();
      }

 return (
    <ScrollView  style={styles.QuestionForm}> 
      <View style ={styles.libelleInput}>
        <Text> Nouvelle Question:</Text>
          <TextInput
            multiline
            numberOfLines={5}
            style={styles.input}
            onChangeText={onChangeLibelle}
            value={libelle}
            placeholder="Ecrivez votre question"
            keyboardType="default"
          />
      </View>

        
        <View>
          
          {/* <Text style={styles.baseText}>PROPOSITIONS</Text> */}
          <Button title="Ajouter une Propositions" onPress={onPress} />
            {propositions.map((proposition) => <PropositionForm style={styles.proposition} key={proposition.propId} libelle={proposition} etat={proposition.etat} />)}
          {/* <PropositionForm  /> */}
        </View>
        
        <View>
            <Button title="SUBMIT" input type="submit" />
        </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    color: 'red'
  },
  QuestionForm: {
    width: '90%',
    borderWidth: 3,
    borderColor:"#0068bde5",
    borderRadius: 5,
    backgroundColor: "#dfecf7",
  } ,
  libelleInput: {
    width: '90%',
    borderWidth: 2,
    borderColor:"#0068bde5",
    borderRadius: 5,
    backgroundColor: "#dfecf7",
  } ,
  proposition: {
    width: '90%',
    borderWidth: 2,
    borderColor:"#0068bde5",
    borderRadius: 5,
    backgroundColor: "#dfecf7",
  }  
  })

export default QuestionForm
