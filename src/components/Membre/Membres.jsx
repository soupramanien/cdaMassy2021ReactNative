import React from 'react';
import { View, Text } from 'react-native';
import Membre from './Membre';
import {useSelector} from "react-redux";

function Membres() {
    const membres = useSelector(state => state.reducer.membre.personnes)
    return(
        <View>
            <Text> 
            {membres.map((membre) => {
               
                    return  <Membre key={membre.idpersonne} membre={membre}/>
                
               

            })
            
            }
            </Text>
        </View>

    )
    
}
export default Membres;