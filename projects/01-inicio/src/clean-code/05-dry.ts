type Size = "" | "S" | "M" | "L" | "XL";

class Product {
	constructor(
		public name: string = "",
		public price: number = 0,
		public size: Size = ""
	) {}

	isProductReady(): boolean {
		const hasError: { [x: string]: (value: any) => boolean } = {
			string: (value: string) => value.length <= 0,
			number: (value: number) => value <= 0,
			size: (value: Size) => value.length <= 0,
		};
		const throwError = (key: any) => {
			throw Error(`${key} is empty`);
		};
		for (const key in this) {
			!!hasError[typeof this[key]](this[key]) && throwError(key);
		}
		return true;
	}

	toString() {
		// !! NO DRY
		// if (this.name.length <= 0) throw Error("name is Empty");
		// if (this.price <= 0) throw Error("price is Empty");
		// if (this.size.length <= 0) throw Error("There aren't size");

		// $ DRY

		return (
			this.isProductReady() &&
			`${this.name} (${this.price} , ${this.size}) `
		);
	}
}

(() => {
	console.log("---------------- Ejercicio 05 ----------------");

	const bluePants = new Product("Blue Large Pants", 2, "L");
	console.log("❗bluePants ➽ ⏩", bluePants.toString());
	const bluePants2 = new Product("algo", 10);
	console.log("❗bluePants ➽ ⏩", bluePants2.toString());
})();
