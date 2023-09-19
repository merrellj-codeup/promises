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

//////// MAIN METHOD
(async () => {
	/////
	getPerson(3).then((data) => {
		console.log(data);
	});
})();
