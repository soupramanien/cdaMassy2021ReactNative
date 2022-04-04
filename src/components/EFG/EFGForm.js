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
						groupes: 0,
						idCanal: 1,
						idCreateur: 3,
					};
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
				<button type='submit' disabled={pristine || submitting}>
					Générer l'aperçu
				</button>
				<button type='button' disabled={pristine || submitting} onClick={reset}>
					Reset values
				</button>
			</form>
			{/* 
				<Field name='test' component='textarea' placeholder={groups} />
				<br />
				
				{students.students === 4 && (
					<>Vos élèves seront répartis de cette façon : 2,2</>
				)}
				{students.students === 5 && (
					<>Vos élèves seront répartis de cette façon : 3,2</>
				)}
				<br />
				{students.students >= 6 && (
					<>
						<label>Nombre d'élèves par groupe</label>
						<Field name='studentsPerGroup' component='select'>
							<option />
							<option value='2'>2</option>
							<option value='3'>3</option>
							{students >= 8 && <option value='4'>4</option>}
							{students >= 10 && <option value='5'>5</option>}
						</Field>
					</>
				)}

				<br />
				{studentsPerGroup && students.students >= 6 && (
					<>
						{modulo === 0 && 'Voici la répartition de vos groupes : ' + groups}
						{modulo < 2 && modulo != 0 && (
							<p>
								Avec cette configuration, l'un de vos élèves n'a pas de groupe.
								Nous l'avons automatiquement ajouté à l'un des groupes.{' '}
							</p>
						)}
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
