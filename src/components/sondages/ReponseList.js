import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useEffect, useState } from "react";
import Reponse from './Reponse';

const ReponseList = ({ reponses }) => {
	console.log("reponse: "+ reponses.indexOf(0).libelle + "nb other:" + reponses.length);
	const [displayedResponses, setDisplayedResponses] = useState(reponses.slice(0,3));
	let totalItems = reponses.length;
	let isNoReponse = totalItems < 1;

	function onShowMoreResponse() {
		console.log('Show more:')
		setDisplayedResponses(reponses);
		console.log("displayed:"+totalItems)

	}

	useEffect(() => {
		setDisplayedResponses(reponses.slice(0,3));
	}, [reponses]);
	
	return (
		<View>
			{isNoReponse ? (
				<Text style={styles.info}>Aucune réponse pour le moment.
					{/* <form class="input_form">
                        <input type="text" class="input_form__field" placeholder="Réponse" />
                        <button type="button" class="input_btn input_btn--primary input_btn--inside input_uppercase">Envoyer</button>
                    </form> */}
				</Text>
			) : (
				<View>
					<Text style={styles.info}>Ont répondu:</Text>
					<TouchableOpacity onPress={onShowMoreResponse} >
						<FlatList
							initialNumToRender={3}
							style={styles.reponsesList}
							data={displayedResponses}
							keyExtractor={(reponse) => String(reponse.idAuteur)}
							contentContainerStyle={styles.container}
							renderItem={({ item }) => <Reponse reponse={item} />}
							//refreshing={loading}
							//onRefresh={loadQuestions}
						/>
						{totalItems>3 && displayedResponses.length<=3 && <Text style={styles.infoShowMore} >...</Text>}
					</TouchableOpacity>
					
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
	},
	infoShowMore: {
		color: '#0068bd',
		fontSize: 20,
		textAlign: 'center',
		fontWeight: '900',
		marginBottom: 10
	}
});
