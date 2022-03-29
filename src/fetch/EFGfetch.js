export default class EFGServices {
	static getAllEFGs(props, idCanal) {
		fetch(`http://localhost:8080/cdamassy2021/api/${idCanal}/EFGs`)
			.then((response) => response.json())
			.then((data) => {
				props(data);
			})
			.catch((error) => error);
	}

	static getEFG(props, idEFG) {
		fetch(`http://localhost:8080/cdamassy2021/api/1/EFGs/${idEFG}`)
			.then((response) => response.json())
			.then((data) => {
				props(data);
			})
			.catch((error) => error);
	}

	static postEFG(props, efg) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		fetch(`http://localhost:8080/cdamassy2021/api/1/EFGs/new`, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(efg),
		})
			.then((response) => response.json())
			.then((data) => {
				props(data);
			})
			.catch((error) => error);
	}

	static getCreator(props, idEFG) {
		fetch(`http://localhost:8080/cdamassy2021/api/1/EFGs/${idEFG}/createur`)
			.then((response) => response.json())
			.then((data) => {
				props(data);
			})
			.catch((error) => error);
	}

	static getNombreMembres(props, idCanal) {
		fetch(
			`http://localhost:8080/cdamassy2021/api/${idCanal}/EFGs/nombreMembres`
		)
			.then((response) => response.json())
			.then((data) => {
				props(data);
			})
			.catch((error) => error);
	}

    static getCanaux(props, idLogin) {
		fetch(
			`http://localhost:8080/cdamassy2021/api/canaux/${idLogin}`
		)
			.then((response) => response.json())
			.then((data) => {
				props(data);
			})
			.catch((error) => error);
	}
}
