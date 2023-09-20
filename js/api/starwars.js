const getPerson = (id) => {
	const url = `https://swapi.dev/api/people/${id}`;
	const options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};
	return fetch(url, options).then((response) => response.json());
};

const getFilm = (id) => {
	const url = `https://swapi.dev/api/films/${id}`;
	const options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};
	return fetch(url, options).then((response) => response.json());
};

export { getPerson, getFilm };
