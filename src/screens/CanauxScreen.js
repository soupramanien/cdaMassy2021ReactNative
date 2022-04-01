import { Text, View, Button } from 'react-native'
import Canaux from '../components/Canal/Canaux'

export default function CanauxScreen({navigation}) {
    return (
        <View>
            <Button title='Back to Home' onPress={() => navigation.goBack()} />
            <Canaux />
        </View>
    )
}

