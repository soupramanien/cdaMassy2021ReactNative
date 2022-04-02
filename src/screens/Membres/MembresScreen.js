import { Text, View, Button } from 'react-native'
import Membres from '../../components/Membre/Membres'

export default function MembresScreen({navigation, route }) {
    //récupérer idCanal auprès route.params
    const { idCanalCourant ,  nomCanalCourant} = route.params
    return (
        <View>
            <Button title='Back to Canaux' onPress={() => navigation.goBack()} />
            {/* passer idCanal au composant Membres */}
            <Membres idCanalCourant={idCanalCourant} nomCanalCourant={nomCanalCourant} />
        </View>
    )
}
