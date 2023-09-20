import { getPerson, getFilm } from "./api/starwars.js";

//////// MAIN METHOD
(async () => {
	/////
	try {
		const person = await getPerson("poop");
		const firstFilmEndpoint = person.films[0];
		const firstFilmId = firstFilmEndpoint.split("/")[5];
		const firstFilm = await getFilm(firstFilmId);
		console.log(`${person.name}'s first film is ${firstFilm.title}`);
		const endpointArr = firstFilm.characters;
		for (let endpoint of endpointArr) {
			const id = endpoint.split("/")[5];
			const character = await getPerson(id);
			console.log(character.name);
		}
	} catch (error) {
		console.log("oops poopy");
	}

	/* DOT THEN HELL
	getPerson(1)
		.then((person) => {
			console.log(person);
			const firstFilm = person.films[0];
			const firstFilmId = firstFilm.split("/")[5];
			getFilm(firstFilmId)
				.then((film) => {
					console.log(`${person.name}'s first film is ${film.title}`);
					const endpointArr = film.characters;
					for (let endpoint of endpointArr) {
						const id = endpoint.split("/")[5];
						getPerson(id)
							.then((person) => {
								console.log(person.name);
							})
							.catch((error) => {
								console.log(error);
							});
					}
				})
				.catch((error) => {
					console.log(error);
				});
		})
		.catch((error) => {
			console.log(error);
		});
    */
	/////
})();
