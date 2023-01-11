(() => {
	// !! BIEN Pero lo de abajo es lo mismo
	// class Person {
	// 	public name: string;
	// 	public gender: Gender;
	// 	public birthDate: Date;

	// 	constructor(name: string, gender: Gender, birthDate: Date) {
	// 		this.name = name;
	// 		this.gender = gender;
	// 		this.birthDate = birthDate;
	// 	}
	// }

	type Gender = "M" | "F";
	// ? MEJOR pero sin aplicar el principio de responsabilidad unica
	class Person {
		constructor(
			public name: string,
			public gender: Gender,
			public birthDate: Date
		) {}
	}

	class User extends Person {
		constructor(
			public email: string,
			public role: string,
			private _lastAccess: Date,
			name: string,
			gender: Gender,
			birthDate: Date
		) {
			super(name, gender, birthDate);
		}

		checkCredentials() {
			return true;
		}
	}

	// class UserSettings extends User {
	// 	constructor(
	// 		public workingDirectory: string,
	// 		public lastOpenFolder: string
	// 	) {
	//         super(...);
	//     }
	// }

	const newPerson = new Person("Mario", "M", new Date("1988-07-04"));
	console.log({ newPerson });
	const newUser = new User(
		"unemail@algo.com",
		"el mejon",
		new Date("2020-07-04"),
		"Mario",
		"M",
		new Date("1988-07-04")
	);
	console.log({ newUser });

    //$ Es imposible aplicar el principio de responsabilidad unica con tantas herencias!!!

    
})();
