import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

// Pour switcher le contexte avec votre lien de tunnel ngrok
// et utiliser les requetes tunnelées depuuis votre mobile vers le localhost de votre machine:
// https://ngrok.com/download

//const URL_CONTEXT = 'http://9f8b-92-184-106-170.ngrok.io'; // <- l'adresse de votre tunnel
const URL_CONTEXT = 'http://localhost:8080';

const initialState = {
	//Async operation state:
	loading: false,
	//Async operation result:
	error: false,

	utilisateur: {
		idUtilisateurCourant: 4,
	},

	canal: {
		idCanalSelectionne: 1,
		canaux: [],
	},

	membreCanal: {
		membresCanal: [
			// { idMembre: 1, nom: 'Rivière', prenom: 'Manuel' },
			// { idMembre: 2, nom: 'Moulin', prenom: 'Marguerite' },
		],
	},

	question: {
		questions: [
			{
				idQuestion: 3,
				libelle: 'Donnez un exemple de classe abstraite',
				idCanal: 1,
				idAuteur: 1,
				nomAuteur: 'Tryphon Tournesol',
				idQuestionnaire: 0,
				propositions: [],
				reponses: [
					{
						idQuestion: 3,
						idAuteur: 4,
						nomAuteur: 'Marguerite Moulin',
						libelle: 'ArrayList',
						dateRendu: '2022-03-22 10:13:26',
					},
				],
				typeQuestion: 'LIBRE',
			},
			{
				idQuestion: 2,
				libelle: "Quel est la couleur du cheval blanc d'Henry IV?",
				idCanal: 1,
				idAuteur: 3,
				nomAuteur: 'Henry IV',
				idQuestionnaire: 0,
				propositions: [
					{
						idProposition: 1,
						idQuestion: 2,
						libelle: 'blanc',
						estCorrecte: 1,
					},
					{
						idProposition: 2,
						idQuestion: 2,
						libelle: 'gris',
						estCorrecte: 1,
					},
				],
				reponses: [
					{
						idQuestion: 3,
						idAuteur: 4,
						nomAuteur: 'Marguerite Moulin',
						libelle: 'ArrayList',
						dateRendu: '2022-03-22 10:13:26',
					},
				],
				typeQuestion: 'CHOIXMULTIPLES',
			},
		],
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
		},
	],
	formateur: {
		idPersonne: 0,
		prenom: '',
		nom: '',
		email: '',
		tel: '',
		pwd: '',
		est_formateur: 0,
		est_gestionnaire: 0,
		est_administrateur: 0,
		allCanauxMembre: null,
	},
};

const actionTypes = {
	LOAD_REPONSE: 'LOAD_REPONSE',
	LOAD_QUESTIONS: 'LOAD_QUESTIONS',
	ASYNC_OP_START: 'ASYNC_OP_START',
	ASYNC_OP_SUCCESS: 'ASYNC_OP_SUCCESS',
	ASYNC_OP_FAILURE: 'ASYNC_OP_FAILURE',
	LOAD_CANAUX: 'loadCanaux',
	LOAD_MEMEBRS_CANAL: 'loadMembresCanal',
	LOAD_QUESTION: 'LOAD_QUESTION',
};

export const actionsCreators = {
	setAsyncOperationStart: () => ({
		type: actionTypes.ASYNC_OP_START,
	}),
	setAsyncOperationSuccess: () => ({
		type: actionTypes.ASYNC_OP_SUCCESS,
	}),
	setAsyncOperationFailure: (error) => ({
		type: actionTypes.ASYNC_OP_FAILURE,
		value: error,
	}),
	addCanal: (canal) => ({
		type: actionTypes.ADD_CANAL,
		value: canal,
	}),
	addMembre: (membre) => ({
		type: actionTypes.ADD_MEMBRE,
		value: membre,
	}),
	deleteMembre: (membreCanal) => ({
		type: actionTypes.DELETE_MEMBRE,
		value: membreCanal,
	}),
	loadCanaux: (canaux) => ({
		type: actionTypes.LOAD_CANAUX,
		value: canaux,
	}),
	loadMembresDuCanal: (membresCanal) => ({
		type: actionTypes.LOAD_MEMEBRS_CANAL,
		value: membresCanal,
	}),
	loadQuestions: (questions) => ({
		type: actionTypes.LOAD_QUESTIONS,
		value: questions,
	}),
	loadReponse: (reponse) => ({
		type: actionTypes.LOAD_REPONSE,
		value: reponse,
	}),
	loadQuestion: (question) => ({
		type: actionTypes.LOAD_QUESTION,
		value: question,
	}),
	loadQuestionsAsync: (idCanalSelectionne) => async (dispatch) => {
		dispatch(actionsCreators.setAsyncOperationStart());
		try {
			const res = await fetch(
				URL_CONTEXT + `/cdamassy2021/api/question/bycanal/${idCanalSelectionne}`
			);
			const newQuestions = await res.json();
			dispatch(actionsCreators.loadQuestions(newQuestions));
			dispatch(actionsCreators.setAsyncOperationSuccess());
		} catch (error) {
			alert('Network Error');
			console.log(error);
			dispatch(actionsCreators.setAsyncOperationFailure());
		}
	},
	addReponseAsync: (reponse) => (dispatch) => {
		dispatch(actionsCreators.setAsyncOperationStart());
		//promise methode
		fetch(URL_CONTEXT + `/cdamassy2021/api/question/reponse`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
			body: JSON.stringify(reponse),
		})
			.then((response) => response.json())
			//Then with the data from the response in JSON...
			.then((reponse) => {
				console.log('Success:', initialState);
				dispatch(actionsCreators.loadReponse(reponse));
				dispatch(actionsCreators.setAsyncOperationSuccess());
			})
			//Then with the error genereted...
			.catch((error) => {
				console.error('Error:', error);
				dispatch(actionsCreators.setAsyncOperationFailure(error));
			});
	},
	addQuestionAsync: (question) => (dispatch) => {
		dispatch(actionsCreators.setAsyncOperationStart());
		console.log('start');

		//promise methode
		fetch(URL_CONTEXT + `/cdamassy2021/api/question/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
			body: JSON.stringify(question),
		})
			.then((question) => question.json())
			//Then with the data from the response in JSON...
			.then((question) => {
				console.log('Success:', initialState);
				dispatch(actionsCreators.loadQuestion(question));
				dispatch(actionsCreators.setAsyncOperationSuccess());
			})
			//Then with the error genereted...
			.catch((error) => {
				console.error('Error:', error);
				dispatch(actionsCreators.setAsyncOperationFailure(error));
			});
	},
};

const reducers = function (state = initialState, action) {
	switch (action.type) {
		case actionTypes.ASYNC_OP_START:
			return { ...state, loading: true };
		case actionTypes.ASYNC_OP_SUCCESS:
			return { ...state, loading: false, error: false };
		case actionTypes.ASYNC_OP_FAILURE:
			return { ...state, loading: false, error: true };
		case actionTypes.LOAD_QUESTIONS:
			return {
				...state,
				question: { ...state.question, questions: action.value },
			};
		case actionTypes.LOAD_REPONSE:
			return {
				...state,
				question: {
					...state.question,
					questions: state.question.questions.map((item) =>
						item.idQuestion == action.value.idQuestion // trouver la question pour laquelle (id == action.value.idQuestion)
							? { ...item, reponses: [...item.reponses, action.value] } // et ajouter action.value (la reponse) à sa liste de réponses
							: item
					),
				},
			};
		case actionTypes.ADD_CANAL:
			return {
				...state,
				canal: {
					...state.canal,
					canaux: [...state.canal.canaux, action.value],
				},
			};
		case actionTypes.ADD_MEMBRE:
			return {
				...state,
				membreCanal: {
					...state.membreCanal,
					membresCanal: [...state.membreCanal.membresCanal, action.value],
				},
			};
		case actionTypes.DELETE_MEMBRE:
			return {
				...state,
				membreCanal: {
					...state.membreCanal,
					membresCanal: [
						...state.membreCanal.membresCanal.filter((mc) => {
							return !(
								mc.idMembre === action.value.idMembre &&
								mc.idCanal === action.value.idCanal
							);
						}),
					],
				},
			};
		case actionTypes.LOAD_CANAUX:
			return { ...state, canal: { ...state.canal, canaux: action.value } };
		case actionTypes.LOAD_MEMEBRS_CANAL:
			return {
				...state,
				membreCanal: { ...state.membreCanal, membresCanal: action.value },
			};
		case actionTypes.LOAD_QUESTION:
			return {
				...state,
				question: {
					...state.question,
					questions: [...state.question.questions, action.value],
				},
			};
		default:
			return state;
	}
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // ajout du module Redux Devtools
const rootReducer = combineReducers({ reducer: reducers, form: formReducer });
export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);
