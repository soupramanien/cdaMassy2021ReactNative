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

	const dispatchStudents = () => {
		console.log('dispatcher');
	};
	const addSquad = () => {
		console.log('ajouter');
	};
	return (
		<>
			<form
				onSubmit={handleSubmit((data) => {
					let efg = {
						createur: {
							idCanal: 1,
							idPersonne: 3,
						},
						intitule: data.intitule,
						groupes: parseInt(0),
						idCanal: 1,
						idCreateur: 3,
					};

					if (props.students === 4) efg.groupes = '2,2';
					if (props.students === 5) efg.groupes = '3,2';

					props.setData(efg);
					console.log(efg);
					// EFGServices.postEFG(() => {}, efg);
				})}>
				<label>Intitulé de l'exercice</label>
				<br />
				<Field
					name='intitule'
					component='input'
					type='text'
					placeholder="Intitulé de l'exercice"
					onChange={(data) => props.setIntituleEFG(data.target.value)}
				/>
				<br />
				{props.students >= 6 && (
					<>
						<label>Nombre d'élèves par groupe</label>
						<Field name='studentsPerGroup' component='select'>
							<option />
							<option value='2'>2</option>
							<option value='3'>3</option>
							{props.students >= 8 && <option value='4'>4</option>}
							{props.students >= 10 && <option value='5'>5</option>}
						</Field>
					</>
				)}
				<br />
				DISPATCH ET ADD
				{props.students % studentsPerGroup === 1 && 'Dispatch automatique.'}
				<br />
				<button type='submit' disabled={pristine || submitting}>
					Générer l'aperçu
				</button>
				<button type='button' disabled={pristine || submitting} onClick={reset}>
					Reset values
				</button>
			</form>
			{/* 

						{modulo >= 2 && (
							<>
								<div>
									Vous avez choisi de faire des groupes de {studentsPerGroup}.
								</div>
								<p>
									Préférez vous les dispatcher ou ajouter un nouveau groupe ?
								</p>
								<label>
									<Field
										name='choice'
										component='input'
										type='radio'
										value='dispatch'
										onChange={() => reliquatDispatch()}
									/>
									Dispatch
								</label>
								<label>
									<Field
										name='choice'
										component='input'
										type='radio'
										value='add'
										onChange={() => reliquatAdd()}
									/>
									Ajout
								</label>
								{choice && <div>Vous avez choisi de {choice}</div>}
							</>
						)}
					</>
				)} */}
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
