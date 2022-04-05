import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Field, reduxForm, formValueSelector } from 'redux-form';

let SelectingFormValuesForm = (props) => {
	const { studentsPerGroup, intitule, handleSubmit } = props;

	let modulo = props.students % studentsPerGroup;
	let nbSquad = Math.floor(props.students / studentsPerGroup);
	const [squad, setSquad] = useState('');
	let maxStudents = studentsPerGroup;
	let arrSquad = [];
	for (let i = 0; i < nbSquad; i++) arrSquad.push(studentsPerGroup);

	const addSquad = () => {
		arrSquad.push(modulo);
		setSquad(arrSquad.toString());
	};

	const dispatchStudents = () => {
		if (modulo !== 0) maxStudents++;
		while (modulo !== 0) {
			arrSquad[modulo - 1] = maxStudents;
			modulo--;
		}
		setSquad(arrSquad.toString());
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(() => {
					let efg = {
						createur: {
							idCanal: props.idCanal,
							idPersonne: props.idCreateur,
						},
						intitule: intitule,
						groupes: parseInt(0),
						idCanal: props.idCanal,
						idCreateur: props.idCreateur,
					};

					if (props.students === 4) efg.groupes = '2,2';
					else if (props.students === 5) efg.groupes = '3,2';
					else efg.groupes = squad;

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
						if (modulo === 1) {
							dispatchStudents();
						}
						if (modulo === 0) {
							dispatchStudents();
						}
					}}>
					<option value='Select...' />
					<option value='2'>2</option>
					<option value='3'>3</option>
					{props.students >= 8 && <option value='4'>4</option>}
					{props.students >= 10 && <option value='5'>5</option>}
				</Field>
				<br />

				{modulo >= 2 && (
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
				<button type='submit'>Générer l'aperçu</button>
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
