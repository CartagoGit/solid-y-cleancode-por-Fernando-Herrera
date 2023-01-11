(() => {
	console.log('---------------- Ejercicio 04 ----------------');
	// Resolver sin la triple condicional dentro del if
	// includes? arrays?
	function isRedFruit(fruit: string): boolean {
		const fruits = ["manzana", "cereza", "ciruela"];
		return fruits.includes(fruit);
	}

	// Simplificar esta función
	// switch? Object literal? validar posibles colores
	type FruitColor = "red" | "yellow" | "purple";
	function getFruitsByColor(color: FruitColor): string[] {
		const fruitsByColor = {
			red: ["manzana", "fresas"],
			yellow: ["piña", "banana"],
			purple: ["moras", "uvas"],
		};

		if (!Object.keys(fruitsByColor).includes(color)) {
			const messageError =
				"the color must be: " + getListDisjunction(fruitsByColor);
			console.log(
				"🚀 <~> file: 04-homework.ts:21 <~> getFruitsByColor <~> messageError",
				messageError
			);
			return [messageError]

			// throw Error(messageError);
		}

		return fruitsByColor[color];
		// if (!!fruitsByColor[color]) return fruitsByColor[color];
		// throw Error("the color must be: red, yellow, purple");
	}

	// Funcion auxiliar para formatear la lista
	const getListDisjunction = (
		obj: object | string[],
		options: { lang: string; type: Intl.ListFormatType } = {
			lang: "en",
			type: "disjunction",
		}
	): string => {
		return new Intl.ListFormat(options.lang, {
			type: options.type,
		}).format(Array.isArray(obj) ? obj : Object.keys(obj));
	};

	// Simplificar esta función
	let isFirstStepWorking = true;
	let isSecondStepWorking = false;
	let isThirdStepWorking = true;
	let isFourthStepWorking = true;

	function workingSteps() {
		if (!isFirstStepWorking) return "First step broken.";
		else if (!isSecondStepWorking) return "Second step broken.";
		else if (!isThirdStepWorking) return "Third step broken.";
		return isFourthStepWorking
			? "Working properly!"
			: "Fourth step broken.";
	}

	// isRedFruit
	console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
	console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true

	//getFruitsByColor
	console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
	console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
	console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
	console.log({ pinkFruits: getFruitsByColor("pink" as FruitColor) }); // Error: the color must be: red, yellow, purple

	// workingSteps
	console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
