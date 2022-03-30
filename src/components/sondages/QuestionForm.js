import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom';
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView, TextInput } from 'react-native';
import { Button } from 'react-native';
import PropositionForm from './PropositionForm';


const QuestionForm = () => {
  // pour premiere partie Libelle
      const [libelle, setLibelle] = React.useState('');
      const onChangeLibelle = (libelle) => {
        setLibelle(libelle);
      }
  // pour la deuximeme partie Propositions
      const [propositions, setPropositions] = useState([{ libelle: "", etat: "correcte" }]);
      const onPress = () => {
        setPropositions((propositions) => [...propositions, { libelle: "", etat: "correcte" }])
      }
  
  // pour la partie SUBMIT
        const handleSubmit = (event) => {
          event.preventDefault();
      }

 return (
    <SafeAreaView  style={styles.QuestionForm}> 
    {/* <Text style={styles.baseText}>LIBELLE</Text> */}
    <Button title="LIBELLE"/>
    <View>
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
        {propositions.map((proposition) => <PropositionForm libelle={proposition} etat={proposition.etat} />)}
        {/* <PropositionForm  /> */}
      </View>
      
      <View>
      <Button title="SUBMIT" input type="submit" />
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    color: 'red'
  },
  
    QuestionForm: {
        // height : 500,
        width : 400,
        margin: 10,
        borderWidth: 3,
        borderColor:"#0068bde5",
        borderRadius: 5,
        padding: 5,
        alignContent: "center",
        backgroundColor: "#bfd9ef",
        flexDirection: "column"
    }  
  })

export default QuestionForm
