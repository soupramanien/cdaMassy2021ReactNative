import { createStore } from 'redux';

const initialState = {
	utilisateur: {
		idUtilisateurCourant:1
	},
	canal: {
		idCanalSelectionne:1,
		canaux: [
			{ idCanal: 1, nom: 'CANAL N°1'},
			{ idCanal: 2, nom: 'CANAL N°2'},
			{ idCanal: 3, nom: 'CANAL N°3'},
			{ idCanal: 4, nom: 'CANAL N°4'}
		]
	},
	question: {
		questions: [
			{
				"idQuestion": 3,
				"libelle": "Donnez un exemple de classe abstraite",
				"idCanal": 1,
				"idAuteur": 1,
				"nomAuteur": "Tryphon Tournesol",
				"idQuestionnaire": 0,
				"propositions": [
					{
						"idProposition": 2,
						"idQuestion": 3,
						"libelle": "protege",
						"estCorrecte": 1
					},
				],
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
						"idAuteur": 11,
						"nomAuteur": "Michel Martin",
						"libelle": "String",
						"dateRendu": "2022-03-22 10:13:26"
					},
				],
				"typeQuestion": "LIBRE"
			},
			{
				"idQuestion": 2,
				"libelle": "Quel est la couleur du cheval blanc d'Henry IV?",
				"idCanal": 1,
				"idAuteur": 12,
				"nomAuteur": "Henry IV",
				"idQuestionnaire": 0,
				"propositions": [
					{
						"idProposition": 1,
						"idQuestion": 2,
						"libelle": "blanc",
						"estCorrecte": 1
					},
					{
						"idProposition": 2,
						"idQuestion": 2,
						"libelle": "gris",
						"estCorrecte": 1
					},
				],
				"reponses": [
					{
						"idQuestion": 3,
						"idAuteur": 4,
						"nomAuteur": "Marguerite Moulin",
						"libelle": "ArrayList",
						"dateRendu": "2022-03-22 10:13:26"
					},
				],
				"typeQuestion": "LIBRE"
			},
		]
	},
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

const actionTypes = {
	LOAD_QUESTIONS: "LOAD_QUESTIONS",
};

export const actionsCreators = {
	loadQuestions: (questions) => ({
		type: actionTypes.LOAD_QUESTIONS,
		value: questions
	  }),
};

const reducer = function (state = initialState, action) {
	switch (action.type) {
		case actionTypes.LOAD_QUESTIONS:
			return { ...state, question: { ...state.question, questions: [ ...state.question.questions,action.value ] }}
		default:
			return state;
	}
};

export const store = createStore(reducer);
