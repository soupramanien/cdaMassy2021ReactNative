import { View, Text, FlatList, StyleSheet } from 'react-native';
import Reponse from './Reponse';

const ReponseList = ({ reponses }) => {
	const isNoReponse = reponses.length < 1;
	return (
		<View>
			{isNoReponse ? (
				<Text value=" Aucune réponse pour le moment ">
					{/* <form class="input_form">
                        <input type="text" class="input_form__field" placeholder="Réponse" />
                        <button type="button" class="input_btn input_btn--primary input_btn--inside input_uppercase">Envoyer</button>
                    </form> */}
				</Text>
			) : (
				<View>
					<Text style={styles.info}>Ont répondu:</Text>
					<FlatList
						style={styles.reponsesList}
						data={reponses}
						keyExtractor={(reponse) => String(reponse.idAuteur)}
						contentContainerStyle={styles.container}
						renderItem={({ item }) => <Reponse reponse={item} />}
						//refreshing={loading}
						//onRefresh={loadQuestions}
					/>
				</View>
			)}
		</View>
	);
};

export default ReponseList;

const styles = StyleSheet.create({
	reponsesList: {
		borderRadius: 15,
		textAlign: 'left',
		alignContent: 'center',
		color: '#292929',
		flexDirection: 'column'
	},
	container: {
		justifyContent: 'space-between'
	},
	info: {
		color: '#0068bd',
		fontSize: 12,
		textAlign: 'left',
		marginTop: 5,
		marginLeft: 12,
		marginBottom: 3
	}
});
