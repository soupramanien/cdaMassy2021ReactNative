import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const initialState = {
	loading: false,
	error: false,

	utilisateur: {
		idUtilisateurCourant: 4,
	},

	canal: {
		canaux: [
			// { idCanal: 1, nom: 'CANAL N°1' },
			// { idCanal: 2, nom: 'CANAL N°2' },
			// { idCanal: 3, nom: 'CANAL N°3' },
			// { idCanal: 4, nom: 'CANAL N°4' },
		],
	},
	membre: {
		personnes:[
			{ idpersonne: 1, nom: 'Tournesol Tryphon'},
			{ idpersonne: 2, nom: 'Castafiore Bianca'},
			{ idpersonne: 3, nom: 'Rivière Manuel'},
			{ idpersonne: 4, nom: 'Moulin Marguerite'},
		]
	},

	membreCanal: {
		membresCanal:[
			{idCanal: 1, idMembre: 1},
			{idCanal: 1, idMembre: 2},
			{idCanal: 1, idMembre: 4},
			{idCanal: 2, idMembre: 2},
			{idCanal: 2, idMembre: 3},
			{idCanal: 3, idMembre: 3},
			{idCanal: 3, idMembre: 4},
			{idCanal: 4, idMembre: 1},
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
				typeQuestion: 'LIBRE',
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
	LOAD_QUESTIONS: 'LOAD_QUESTIONS',
	ASYNC_OP_START: 'ASYNC_OP_START',
	ASYNC_OP_SUCCESS: 'ASYNC_OP_SUCCESS',
	ASYNC_OP_FAILURE: 'ASYNC_OP_FAILURE',
	ADD_CANAL: "addCanal",
    ADD_MEMBRE: "addMembre",
  	DELETE_MEMBRE: "deleteMembre",
	LOAD_CANAUX : "loadCanaux",
};

export const actionsCreators = {
	setAsyncOperationStart: () => ({
		type: actionTypes.ASYNC_OP_START,
	}),
	setAsyncOperationSuccess: () => ({
		type: actionTypes.ASYNC_OP_SUCCESS,
	}),
	setAsyncOperationFailure: () => ({
		type: actionTypes.ASYNC_OP_FAILURE,
	}),
	addCanal: (canal) => ({
		type: actionTypes.ADD_CANAL,
		value: canal
    }),
	addMembre: (membre) =>({
		type: actionTypes.ADD_MEMBRE,
		value: membre
	}),
	deleteMembre: (membreCanal) =>({
		type: actionTypes.DELETE_MEMBRE,
		value: membreCanal
	}),
	loadCanaux : (canaux) =>({
		type : actionTypes.LOAD_CANAUX,
		value : canaux
	}),
	loadQuestions: (questions) => ({
		type: actionTypes.LOAD_QUESTIONS,
		value: questions,
	}),
	loadQuestionsAsync: (idCanalSelectionne) => async (dispatch) => {
		dispatch(actionsCreators.setAsyncOperationStart());
		try {
			const res = await fetch(
				'http://localhost:8080/cdamassy2021/api/question/bycanal/' +
					idCanalSelectionne
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
		
		case actionTypes.ADD_CANAL:
			return{  ...state, canal: { ...state.canal, canaux: [ ...state.canal.canaux,action.value ] }}
				
		case actionTypes.ADD_MEMBRE:
			return { ...state, membreCanal: {...state.membreCanal, membresCanal: [ ...state.membreCanal.membresCanal,action.value ] }}
				
		case actionTypes.DELETE_MEMBRE:
			return { ...state, membreCanal: {...state.membreCanal, membresCanal: [...state.membreCanal.membresCanal.filter((mc) =>{ return !(mc.idMembre===action.value.idMembre && mc.idCanal === action.value.idCanal) })] } }
		case actionTypes.LOAD_CANAUX:
			return {...state, canal:{...state.canal, canaux:action.value}}
		default:
			return state;
	}
};

const rootReducer = combineReducers({ reducer: reducers, form: formReducer });
export const store = createStore(rootReducer, applyMiddleware(thunk));
