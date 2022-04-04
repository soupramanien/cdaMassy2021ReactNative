import React, { useState } from 'react';
import { connect } from 'react-redux';
import { propTypes } from 'redux-form';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import EFGServices from '../../fetch/EFGfetch';

let SelectingFormValuesForm = (props) => {
	const {
		studentsPerGroup,
		choice,
		intitule,
		handleSubmit,
		pristine,
		reset,
		submitting,
	} = props;
	let modulo = props.students % studentsPerGroup;

	// let nbGroups = Math.floor(students.students / studentsPerGroup);
	// let groupesAdd = '';
	// const [groups, setGroups] = useState('');

	// let minStudents = Math.floor(students.students / studentsPerGroup);
	// let maxStudents = minStudents;
	// let modulo = students.students % studentsPerGroup;
	// let arrGroupes = [];
	// for (let i = 0; i < nbGroups; i++) arrGroupes.push(minStudents);

	// const reliquatAdd = () => {
	// 	arrGroupes.push(modulo);
	// 	groupesAdd = arrGroupes.toString();
	// 	setGroups(arrGroupes.toString());
	// 	return groupesAdd;
	// };

	// const reliquatDispatch = () => {
	// 	if (modulo !== 0) maxStudents++;
	// 	while (modulo !== 0) {
	// 		arrGroupes[modulo - 1] = maxStudents;
	// 		modulo--;
	// 	}
	// 	groupesAdd = arrGroupes.toString();
	// 	setGroups(arrGroupes.toString());
	// 	return groupesAdd;
	// };

	// if (students.students === 4 && groups === '') {
	// 	return setGroups('2,2');
	// }
	// if (students.students === 5 && groups === '') return setGroups('3,2');
	let nbSquad = Math.floor(props.students / studentsPerGroup);
	const [squad, setSquad] = useState('');

	let message = '';
	const dispatchStudents = () => {
		setSquad('salut');
		console.log('dans la function disptach');
	};
	const addSquad = () => {
		setSquad('hello');
		console.log('dans la function add');
	};
	let okChoice;
	console.log(modulo);
	return (
		<>
			<form
				onSubmit={handleSubmit(() => {
					let efg = {
						createur: {
							idCanal: 1,
							idPersonne: props.idCreateur,
						},
						intitule: intitule,

						groupes: parseInt(0),
						idCanal: 1,
						idCreateur: props.idCreateur,
					};
					console.log(efg);
					console.log(props.idCreateur);
					if (props.students === 4) efg.groupes = '2,2';
					if (props.students === 5) efg.groupes = '3,2';

					props.setData(efg);
				})}>
				<label>Intitulé de l'exercice</label>
				<br />
				<Field
					name='intitule'
					component='input'
					type='text'
					placeholder="Intitulé de l'exercice"
				/>
				<br />
				<label>Nombre d'élèves par groupe</label>

				<Field
					name='studentsPerGroup'
					component='select'
					onClick={() => {
						if (modulo >= 2) return (okChoice = true);
						else if (modulo === 1) {
							dispatchStudents();
						} else if (modulo === 0) {
							addSquad();
						} else {
							console.log('oups');
						}
					}}>
					<option value='Select...' />
					<option value='2'>2</option>
					<option value='3'>3</option>
					{props.students >= 8 && <option value='4'>4</option>}
					{props.students >= 10 && <option value='5'>5</option>}
				</Field>
				<br />

				{okChoice === true && (
					<>
						<label>Choix du reliquat</label>
						<label>
							<Field
								name='choice'
								value='dispatch'
								component='input'
								type='radio'
								onClick={() => dispatchStudents()}
							/>
							dispatch
						</label>
						<label>
							<Field
								name='choice'
								value='add'
								component='input'
								type='radio'
								onClick={() => addSquad()}
							/>
							add
						</label>
					</>
				)}

				<br />

				<button type='submit' disabled={pristine || submitting}>
					Générer l'aperçu
				</button>
			</form>
		</>
	);
};

SelectingFormValuesForm = reduxForm({
	form: 'selectingFormValues',
})(SelectingFormValuesForm);

const selector = formValueSelector('selectingFormValues');
SelectingFormValuesForm = connect((state) => {
	const studentsPerGroup = selector(state, 'studentsPerGroup');
	const intitule = selector(state, 'intitule');
	const choice = selector(state, 'choice');

	return {
		choice,
		intitule,
		studentsPerGroup,
	};
})(SelectingFormValuesForm);

export default SelectingFormValuesForm;
