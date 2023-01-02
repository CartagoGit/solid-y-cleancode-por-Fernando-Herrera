(() => {
	// arreglo de temperaturas celsius
	const temperaturesCelsius: number[] = [33.6, 12.34];

	// Dirección ip del servidor
	const serverIp: string = "123.123.123.123";

	// Listado de usuarios
	const users: { id: number; email: string }[] = [
		{ id: 1, email: "fernando@google.com" },
		{ id: 2, email: "juan@google.com" },
		{ id: 3, email: "melissa@google.com" },
	];

	// Listado de emails de los usuarios
	const userEmails: string[] = users.map((user) => user.email);

	// Variables booleanas de un video juego
	const canJump: boolean = false;
	const canRun: boolean = true;
	const hasItems: boolean = true;
	const isLoading: boolean = false;

	// Otros ejercicios
	// tiempo inicial
	const startTime: number = new Date().getTime();

	//....
	// 3 doritos después
	//...
	// Tiempo al final
	const endTime = new Date().getTime() - startTime;

	// Funciones
	// Obtiene los libros
	function getBooks(): [] {
		return [];
		// throw new Error("Function not implemented.");
	}

	// obtiene libros desde un URL
	function getBooksByUrl(url: string): void {
		console.log(
			"🚀 <~> file: 02-name-types.ts:42 <~> getBooksByUrl <~> url",
			url
		);
		throw new Error("Function not implemented.");
	}

	// obtiene el área de un cuadrado basado en sus lados
	function getSquareAreaBySide(side: number): void {
		console.log(
			"🚀 <~> file: 02-name-types.ts:48 <~> squareAreaBySides <~> side",
			side
		);
		throw new Error("Function not implemented.");
	}

	// imprime el trabajo
	function printJob(): void {
		throw new Error("Function not implemented.");
	}
})();
