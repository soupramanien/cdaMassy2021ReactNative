import { Text, View } from 'react-native'
import Membres from '../../components/Membre/Membres'

export default function MembresScreen({ route }) {
    //récupérer idCanal auprès route.params
    const { idCanalCurrent } = route.params
    return (
        <View>
            {/* passer idCanal au composant Membres */}
            <Membres idCanalCurrent={idCanalCurrent} />
        </View>
    )
}