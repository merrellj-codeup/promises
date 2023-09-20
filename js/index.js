import { getPerson, getFilm } from "./api/starwars.js";

//////// MAIN METHOD
(async () => {
	/////
	getPerson(1).then((person) => {
		console.log(person);
		const firstFilm = person.films[0];
		const firstFilmId = firstFilm.split("/")[5];
		getFilm(firstFilmId).then((film) => {
			console.log(`${person.name}'s first film is ${film.title}`);
		});
	});
	/////
})();
