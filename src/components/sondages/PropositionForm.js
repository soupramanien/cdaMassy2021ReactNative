import React from 'react';
import { useState } from 'react';
import RadioForm from 'react-native-simple-radio-button';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native';

export default function PropositionForm() {
    const [libelle, setLibelle] = React.useState('');
    const onChangeLibelle = (libelle) => {
      setLibelle(libelle);
      // alert(`The name you entered was:` +name);
    }
  const [chosenOption, setChosenOption] = useState(''); //will store our current user options
  const options = [
    { label: 'Indéfinie', value: 'Indéfinie' },
    { label: 'Correct', value: 'Correct' },
    { label: 'Incorrecte', value: 'Incorrecte' },
  ]; //create our options for radio group
  return (
    <View>
      <Text> {chosenOption}</Text>
      <TextInput
        multiline
        numberOfLines={5}
        // style={styles.input}
        onChangeText={onChangeLibelle}
        value={libelle}
        placeholder="Ecrivez votre proposition"
        keyboardType="default"
      />
      <RadioForm
        radio_props={options}
        initial={0} //initial value of this group
        onPress={(value) => {
          setChosenOption(value);
        }} //if the user changes options, set the new value
      />
    </View>
  );
}



