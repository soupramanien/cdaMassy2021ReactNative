import { createStore } from 'redux';

const initialState = {
	questions:
	[
		{
			"idQuestion": 3,
			"libelle": "Donnez un exemple de classe abstraite",
			"idCanal": 1,
			"idAuteur": 1,
			"nomAuteur": "Tryphon Tournesol",
			"idQuestionnaire": 0,
			"propositions": [],
			"reponses": [
				{
					"idQuestion": 3,
					"idAuteur": 4,
					"nomAuteur": "Marguerite Moulin",
					"libelle": "ArrayList",
					"dateRendu": "2022-03-22 10:13:26"
				},
				{
					"idQuestion": 3,
					"idAuteur": 5,
					"nomAuteur": "Nadia Lupin",
					"libelle": "java.sql.Connection",
					"dateRendu": "2022-03-22 10:13:26"
				},
				{
					"idQuestion": 3,
					"idAuteur": 6,
					"nomAuteur": "Marguerite Gatot",
					"libelle": "je sais pas",
					"dateRendu": "2022-03-22 10:13:26"
				},
				{
					"idQuestion": 3,
					"idAuteur": 3,
					"nomAuteur": "Manuel Rivière",
					"libelle": "java.util.List",
					"dateRendu": "2022-03-22 10:13:26"
				}
			],
			"typeQuestion": "LIBRE"
		},
		{
			"idQuestion": 4,
			"libelle": "Chassez l'intrus",
			"idCanal": 1,
			"idAuteur": 2,
			"nomAuteur": "Bianca Castafiore",
			"idQuestionnaire": 1,
			"propositions": [
				{
					"idProposition": 2,
					"idQuestion": 4,
					"libelle": "protege",
					"estCorrecte": 1
				},
				{
					"idProposition": 1,
					"idQuestion": 4,
					"libelle": "private",
					"estCorrecte": 0
				},
				{
					"idProposition": 3,
					"idQuestion": 4,
					"libelle": "public",
					"estCorrecte": 0
				}
			],
			"reponses": [
				{
					"idQuestion": 4,
					"idAuteur": 1,
					"nomAuteur": "Tryphon Tournesol",
					"libelle": "protege",
					"dateRendu": null
				},
				{
					"idQuestion": 4,
					"idAuteur": 2,
					"nomAuteur": "Bianca Castafiore",
					"libelle": "protege",
					"dateRendu": null
				}
			],
			"typeQuestion": "CHOIXMULTIPLES"
		}
	],
	efgs: [
		{
			idEfg: 1,
			createur: {
				idCanal: 1,
				idPersonne: 1,
			},
			intitule: 'TP définir objectif',
			groupes: '2,3',
			idCanal: 1,
			idCreateur: 1,
		},
		{
			idEfg: 2,
			createur: {
				idCanal: 1,
				idPersonne: 2,
			},
			intitule: 'TP définir but',
			groupes: '2,2,3',
			idCanal: 1,
			idCreateur: 2,
		}
	],
	formateur : {
		"idPersonne": 0,
		"prenom": "",
		"nom": "",
		"email": "",
		"tel": "",
		"pwd": "",
		"est_formateur": 0,
		"est_gestionnaire": 0,
		"est_administrateur": 0,
		"allCanauxMembre": null
	},
};

const actionTypes = {};

export const actionCreators = {};

const reducer = function (state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
};

export const store = createStore(reducer);
