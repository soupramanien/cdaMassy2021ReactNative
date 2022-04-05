import { useDispatch, useSelector } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

// Pour switcher le contexte avec votre lien de tunnel ngrok
// et utiliser les requetes tunnelées depuuis votre mobile vers le localhost de votre machine:
// https://ngrok.com/download

// const URL_CONTEXT =
// 'http://3288-2a01-cb04-75a-8200-7543-d85a-aaf4-3edc.ngrok.io'; // <- l'adresse de votre tunnel
const URL_CONTEXT = 'http://localhost:8080';

function getToken() {
	return store.getState().reducer.utilisateur.courant.accessToken;
}
function getHeaders() {
	let headers = new Headers();
	headers.set('Authorization', 'Bearer ' + getToken());
	return headers;
}

const initialState = {
	isLoggedIn: false,
	//Async operation state:
	loading: false,
	//Async operation result:
	error: false,
	errorMessage: '',

	utilisateur: {
		courant: null,
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
		questions: [],
	},

	efg: {
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
	nombreMembres: 6,

	formateur: {
		idPersonne: 0,
		prenom: '',
		nom: '',
	},
};

const actionTypes = {
	LOAD_REPONSE: 'LOAD_REPONSE',
	LOAD_QUESTIONS: 'LOAD_QUESTIONS',
	ASYNC_OP_START: 'ASYNC_OP_START',
	ASYNC_OP_SUCCESS: 'ASYNC_OP_SUCCESS',
	ASYNC_OP_FAILURE: 'ASYNC_OP_FAILURE',
	LOAD_ERROR_MESSAGE: 'LOAD_ERROR_MESSAGE',
	LOAD_CANAUX: 'loadCanaux',
	LOAD_MEMEBRS_CANAL: 'loadMembresCanal',
	LOAD_QUESTION: 'LOAD_QUESTION',
	LOAD_USER: 'LOAD_USER',
	SET_LOGGED_IN: 'SET_LOGGED_IN',
	ADD_EFG: 'ADD_EFG',
	LOAD_EFGS: 'LOAD_EFGS',
	LOAD_EFG: 'LOAD_EFG',
	LOAD_NOMBRE_MEMBRES: 'LOAD_NOMBRE_MEMBRES',
	LOAD_FORMATEUR: 'LOAD_FORMATEUR',
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
	loadErrorMessage: (message) => ({
		type: actionTypes.LOAD_ERROR_MESSAGE,
		value: message,
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
	loadCanauxAsync: (idUtilisateurCourant) => async (dispatch) => {
		try {
			const res = await fetch(
				URL_CONTEXT + `/cdamassy2021/api/canaux/${idUtilisateurCourant}`,
				{ headers: getHeaders() }
			);
			const newCanaux = await res.json();
			dispatch(actionsCreators.loadCanaux(newCanaux));
		} catch (error) {
			alert('Network Error');
			console.log(error);
		}
	},
	loadMembresDuCanal: (membresCanal) => ({
		type: actionTypes.LOAD_MEMEBRS_CANAL,
		value: membresCanal,
	}),
	loadMembresDuCanalAsync: (idCanalCourant) => async (dispatch) => {
		try {
			const res = await fetch(URL_CONTEXT + `/cdamassy2021/api/canal/1`, {
				headers: getHeaders(),
			});
			const newMembresCanal = await res.json();
			dispatch(actionsCreators.loadMembresDuCanal(newMembresCanal));
		} catch (error) {
			alert('Network Error');
			console.log(error);
		}
	},
	loadNombreMembres: (nMembre) => ({
		type: actionTypes.LOAD_NOMBRE_MEMBRES,
		value: nMembre,
	}),

	loadNombreMembresAsync: (idCanal) => async (dispatch) => {
		try {
			const res = await fetch(
				URL_CONTEXT + `/cdamassy2021/api/${idCanal}/EFGs/nombreMembres`,
				{ headers: getHeaders() }
			);
			const nMembresCanal = await res.json();
			dispatch(actionsCreators.loadNombreMembres(nMembresCanal));
		} catch (error) {
			alert('Network Error');
			console.log(error);
		}
	},

	loadFormateur: (formateur) => ({
		type: actionTypes.LOAD_FORMATEUR,
		value: formateur,
	}),

	loadFormateurAsync: (idEFG) => async (dispatch) => {
		try {
			const res = await fetch(
				URL_CONTEXT + `/cdamassy2021/api/1/EFGs/${idEFG}/createur`,
				{ headers: getHeaders() }
			);
			const formateur = await res.json();
			dispatch(actionsCreators.loadFormateur(formateur));
		} catch (error) {
			alert('Network Error');
			console.log(error);
		}
	},
	addEfg: (efg) => ({
		type: actionTypes.ADD_EFG,
		value: efg,
	}),
	addEfgAsync: (efg, idCanal) => (dispatch) => {
		console.log('start');
		//promise methode
		fetch(URL_CONTEXT + `/cdamassy2021/api/${idCanal}/EFGs/new`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'Access-Control-Allow-Origin': '*',
				Authorization: 'Bearer ' + getToken(),
			},
			body: JSON.stringify(efg),
		})
			.then((efg) => efg.json())
			//Then with the data from the response in JSON...
			.then((efg) => {
				dispatch(actionsCreators.addEfg(efg));
			})
			//Then with the error genereted...
			.catch((error) => {
				console.error('Error:', error);
			});
	},
	loadEfg: (efg) => ({
		type: actionTypes.LOAD_EFG,
		value: efg,
	}),

	loadEfgAsync: (idEfg) => async (dispatch) => {
		try {
			const res = await fetch(
				URL_CONTEXT + `/cdamassy2021/api/1/EFGs/${idEfg}`,
				{ headers: getHeaders() }
			);
			const efg = await res.json();
			dispatch(actionsCreators.loadEfg(efg));
		} catch (error) {
			alert('Network Error');
			console.log(error);
		}
	},
	loadefgs: (efgs) => ({
		type: actionTypes.LOAD_EFGS,
		value: efgs,
	}),

	loadEfgsAsync: (idCanal) => async (dispatch) => {
		try {
			const efgs = await fetch(
				URL_CONTEXT + `/cdamassy2021/api/${idCanal}/EFGs`,
				{ headers: getHeaders() }
			);
			const newefgs = await efgs.json();
			dispatch(actionsCreators.loadefgs(newefgs));
		} catch (error) {
			alert('Network Error');
			console.log(error);
		}
	},
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
	resetDatabaseAsync: () => (dispatch) => {
		dispatch(actionsCreators.setAsyncOperationStart());
		//promise methode
		fetch(URL_CONTEXT + `/cdamassy2021/api/database/reset`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				Authorization: 'Bearer ' + getToken(),
			},
		})
			.then((response) => response.json())
			//Then with the data from the response in JSON...
			.then((reponse) => {
				console.log('Success:', reponse);
				dispatch(actionsCreators.setAsyncOperationSuccess());
			})
			//Then with the error genereted...
			.catch((error) => {
				console.error('Error:', error);
				dispatch(actionsCreators.setAsyncOperationFailure(error));
			});
	},

	loadQuestionsAsync: (idCanalSelectionne) => async (dispatch) => {
		dispatch(actionsCreators.setAsyncOperationStart());
		try {
			const res = await fetch(
				URL_CONTEXT +
					`/cdamassy2021/api/question/bycanal/${idCanalSelectionne}`,
				{ headers: getHeaders() }
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
				Authorization: 'Bearer ' + getToken(),
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
				Authorization: 'Bearer ' + getToken(),
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
				//dispatch(actionsCreators.loadErrorMessage('Erreur: '+ error));
				dispatch(actionsCreators.setAsyncOperationFailure(error));
			});
	},
	setSignInAsync: (login) => (dispatch) => {
		dispatch(actionsCreators.setAsyncOperationStart());
		console.log('start' + login);
		//promise methode
		fetch(URL_CONTEXT + `/cdamassy2021/api/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
			body: JSON.stringify(login),
		})
			.then((user) => user.json())
			//Then with the data from the response in JSON...
			.then((user) => {
				console.log('Success:', user);
				dispatch(actionsCreators.loadUser(user));
				dispatch(actionsCreators.setLoggedIn(true));
				dispatch(actionsCreators.setAsyncOperationSuccess());
			})
			//Then with the error genereted...
			.catch((error) => {
				console.error('Error:', error);
				//dispatch(actionsCreators.loadErrorMessage('Erreur: '+ error));
				dispatch(actionsCreators.setAsyncOperationFailure(error));
			});
	},
	loadUser: (user) => ({
		type: actionTypes.LOAD_USER,
		value: user,
	}),
	setLoggedIn: (value) => ({
		type: actionTypes.SET_LOGGED_IN,
		value: value,
	}),
	disconnectUser: () => (dispatch) => {
		dispatch(actionsCreators.setLoggedIn(false));
		dispatch(actionsCreators.loadUser({}));
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
		case actionTypes.LOAD_USER:
			return {
				...state,
				utilisateur: { ...state.utilisateur, courant: action.value },
			};
		case actionTypes.SET_LOGGED_IN:
			return { ...state, isLoggedIn: action.value };
		case actionTypes.LOAD_ERROR_MESSAGE:
			return { ...state, errorMessage: action.value };
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
		case actionTypes.LOAD_MEMEBRS_CANAL: // <- Typo here
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
		case actionTypes.LOAD_NOMBRE_MEMBRES:
			return { ...state, nombreMembres: action.value };
		case actionTypes.LOAD_FORMATEUR:
			return { ...state, formateur: action.value };
		case actionTypes.LOAD_EFGS:
			return { ...state, efgs: action.value };
		case actionTypes.LOAD_EFG:
			return { ...state, efg: action.value };
		case actionTypes.ADD_EFG:
			return { ...state, efgs: [...state.efgs, action.value] };
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
