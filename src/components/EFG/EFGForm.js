import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Text, Button } from 'react-native';

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
				<Text>Intitulé de l'exercice</Text>

				<Field
					name='intitule'
					component='input'
					type='text'
					placeholder="Intitulé de l'exercice"
				/>
				<Text>Nombre d'élèves par groupe</Text>
				<Field
					name='studentsPerGroup'
					component='input'
					type='number'
					maxLength='5'
					minLength='2'
					onClick={() => {
						if (modulo === 1) {
							dispatchStudents();
						}
						if (modulo === 0) {
							dispatchStudents();
						}
					}}></Field>

				{modulo >= 2 && (
					<>
						<Text>Choix du reliquat</Text>
						<Text>
							<Field
								name='choice'
								value='dispatch'
								component='input'
								type='radio'
								onClick={() => dispatchStudents()}
							/>
							dispatch
						</Text>
						<Text>
							<Field
								name='choice'
								value='add'
								component='input'
								type='radio'
								onClick={() => addSquad()}
							/>
							add
						</Text>
					</>
				)}
				<button type='submit' title="Générer l'aperçu">
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
