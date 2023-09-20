/*
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
*/

/*
TRADITIONAL FUNCTION:
async function getPerson(id)...
*/

const getPerson = async (id) => {
	const url = `https://swapi.dev/api/people/${id}`;
	const options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};
	try {
		const response = await fetch(url, options);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log("the specific function caught it");
	}
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
