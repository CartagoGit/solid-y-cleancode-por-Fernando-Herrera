(() => {
	// función para obtener información de una película por Id
	function getInfoMovie(movieId: string): object {
		console.log({ movieId });
		const info: object = {};
		return info;
	}

	// función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
	function getInfoAllActors(movieId: string): [] {
		console.log({ movieId });
		return [];
	}

	// funcion para obtener el bio del actor por el id
	function getBioActor(actorId: string): void {
		console.log({ actorId });
	}

	// Crear una película
	interface Movie {
		cast: string[];
		description: string;
		rating: number;
		title: string;
	}

	function creatMovie(movie: Movie): void {
		console.log(movie);
	}

	// Crea un nuevo actor
	function createActor(firstName: string, birthdate: Date): boolean {
		// tarea asincrona para verificar nombre
		// ..
		// ..
		if (firstName.toLowerCase() === "fernando" || !birthdate) return false;

		console.log("Crear actor");
		return true;
	}
})();
