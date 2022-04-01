import { View, Text, StyleSheet } from 'react-native';

const Reponse = ({ reponse }) => {
	//props = {todos: [{}, {}]}
	return (
		<View style={styles.reponseStyle}>
			<Text style={styles.auteurStyle}>{reponse.nomAuteur}:</Text>
			<Text style={styles.libelleReponse}>{reponse.libelle}</Text>
		</View>
	);
};
export default Reponse;

const styles = StyleSheet.create({
	reponseStyle: {
		backgroundColor: '#80b3de',
		padding: 6,
		borderRadius: 8,
		margin: 3
	},
	auteurStyle: {
		color: '#ffffff',
		fontWeight: 'bold',
		fontSize: 12,
		marginLeft: 3
	},
	libelleReponse: {
		color: '#ffffff',
		fontSize: 16,
		margin: 3
	},

	info: {
		color: '#0068bd',
		fontSize: 8,
		alignSelf: 'center'
	}
});
