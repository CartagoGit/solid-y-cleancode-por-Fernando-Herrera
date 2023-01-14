import { Vehicle, Volvo } from "./03-liskov-substitution-principle-lsp-b";
import {
	Tesla,
	Audi,
	Toyota,
	Honda,
} from "./03-liskov-substitution-principle-lsp-b";

(() => {
	// const printCarSeats = (cars: (Tesla | Audi | Toyota | Honda | Volvo)[]) => {
	const printCarSeats = (cars: Vehicle[]) => {
		for (const car of cars) {
			// if (car instanceof Tesla) {
			// 	console.log("Tesla", car.getNumberOfTeslaSeats());
			// 	continue;
			// } else if (car instanceof Audi) {
			// 	console.log("Audi", car.getNumberOfAudiSeats());
			// 	continue;
			// } else if (car instanceof Toyota) {
			// 	console.log("Toyota", car.getNumberOfToyotaSeats());
			// 	continue;
			// } else if (car instanceof Honda) {
			// 	console.log("Honda", car.getNumberOfHondaSeats());
			// 	continue;
			// } else if (car instanceof Volvo) {
			// 	console.log("Volvo", car.getNumberOfVolvoSeats());
			// 	continue;
			// }
			console.log(car.constructor.name, car.getNumberOfSeats());
		}
	};

	const cars = [
		new Tesla(7),
		new Audi(2),
		new Toyota(5),
		new Honda(5),
		new Volvo(2),
	];

	printCarSeats(cars);
})();
