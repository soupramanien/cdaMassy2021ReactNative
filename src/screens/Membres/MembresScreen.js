import { Text, View, Button } from 'react-native'
import Membres from '../../components/Membre/Membres'

export default function MembresScreen({navigation, route }) {
    //récupérer idCanal auprès route.params
    const { idCanalCurrent , nomCanalCurrent} = route.params
    return (
        <View>
            <Button title='Back to Canaux' onPress={() => navigation.goBack()} />
            {/* passer idCanal au composant Membres */}
            <Membres idCanalCurrent={idCanalCurrent} nomCanalCurrent={nomCanalCurrent} />
        </View>
    )
}