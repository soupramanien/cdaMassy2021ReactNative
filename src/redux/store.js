import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

// Pour switcher le contexte avec votre lien de tunnel ngrok
// et utiliser les requetes tunnelées vers le localhost de votre machine:
// https://ngrok.com/download

//const URL_CONTEXT = 'http://68f0-2a01-e0a-5db-3370-35da-d2ab-80a8-c977.ngrok.io'; // <- l'adresse de votre tunnel
const URL_CONTEXT = 'http://localhost:8080';

const initialState = {
	loading: false,
	error: false,

	utilisateur: {
		idUtilisateurCourant: 4
	},

	canal: {
		idCanalSelectionne: 1,
		canaux: [
			{ idCanal: 1, nom: 'CANAL N°1' },
			{ idCanal: 2, nom: 'CANAL N°2' },
			{ idCanal: 3, nom: 'CANAL N°3' },
			{ idCanal: 4, nom: 'CANAL N°4' }
		]
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
				propositions: [
					{
						idProposition: 2,
						idQuestion: 3,
						libelle: 'protege',
						estCorrecte: 1
					}
				],
				reponses: [
					{
						idQuestion: 3,
						idAuteur: 4,
						nomAuteur: 'Marguerite Moulin',
						libelle: 'ArrayList',
						dateRendu: '2022-03-22 10:13:26'
					}
				],
				typeQuestion: 'LIBRE'
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
						estCorrecte: 1
					},
					{
						idProposition: 2,
						idQuestion: 2,
						libelle: 'gris',
						estCorrecte: 1
					}
				],
				reponses: [
					{
						idQuestion: 3,
						idAuteur: 4,
						nomAuteur: 'Marguerite Moulin',
						libelle: 'ArrayList',
						dateRendu: '2022-03-22 10:13:26'
					}
				],
				typeQuestion: 'LIBRE'
			}
		]
	},
	efgs: [
		{
			idEfg: 1,
			createur: {
				idCanal: 1,
				idPersonne: 1
			},
			intitule: 'TP définir objectif',
			groupes: '2,3',
			idCanal: 1,
			idCreateur: 1
		},
		{
			idEfg: 2,
			createur: {
				idCanal: 1,
				idPersonne: 2
			},
			intitule: 'TP définir but',
			groupes: '2,2,3',
			idCanal: 1,
			idCreateur: 2
		}
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
		allCanauxMembre: null
	}
};

const actionTypes = {
	LOAD_REPONSE: 'LOAD_REPONSE',
	LOAD_QUESTIONS: 'LOAD_QUESTIONS',
	ASYNC_OP_START: 'ASYNC_OP_START',
	ASYNC_OP_SUCCESS: 'ASYNC_OP_SUCCESS',
	ASYNC_OP_FAILURE: 'ASYNC_OP_FAILURE'
};

export const actionsCreators = {
	setAsyncOperationStart: () => ({
		type: actionTypes.ASYNC_OP_START
	}),
	setAsyncOperationSuccess: () => ({
		type: actionTypes.ASYNC_OP_SUCCESS
	}),
	setAsyncOperationFailure: (error) => ({
		type: actionTypes.ASYNC_OP_FAILURE,
		value: error
	}),
	loadQuestions: (questions) => ({
		type: actionTypes.LOAD_QUESTIONS,
		value: questions
	}),
	loadReponse: (reponse) => ({
		type: actionTypes.LOAD_REPONSE,
		value: reponse
	}),
	loadQuestionsAsync: (idCanalSelectionne) => async (dispatch) => {
		dispatch(actionsCreators.setAsyncOperationStart());
		try {
			const res = await fetch(URL_CONTEXT + `/cdamassy2021/api/question/bycanal/${idCanalSelectionne}`);
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
		console.log('start');
		{
			/** 
			const res =  fetch(URL_CONTEXT + `/cdamassy2021/api/question/reponse`, {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					Accept: 'application/json',
					'Access-Control-Allow-Origin': '*'
				},
				body: JSON.stringify(reponse)
			});

			//alert('parsed:' + res);
			const newReponse =  res.json();
			console.log('result');
			//	

			//console.log(newReponse);
		  
			//alert('ADD Reponse Failure' + error);
			console.log(error);

			
			*/
		}
		//promise methode
		fetch(URL_CONTEXT + `/cdamassy2021/api/question/reponse`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify(reponse)
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
	}
};

const reducers = function(state = initialState, action) {
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
				question: { ...state.question, questions: action.value }
			};
			case actionTypes.LOAD_REPONSE:
				return {
					...state,
					question: {
						...state.question,
						questions:  
							state.question.questions.map((item)=>(item.idQuestion == action.value.idQuestion)
									? { ...item, reponses: [ ...item.reponses, action.value ] }
									: item)
						
					}
				};
		default:
			return state;
	}
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ reducer: reducers, form: formReducer });
export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
	//applyMiddleware(, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
