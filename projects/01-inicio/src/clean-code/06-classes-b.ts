(() => {
	type Gender = "M" | "F";

	interface PersonProps {
		name: string;
		gender: Gender;
		birthDate: Date;
	}

	// ? MEJOR pero sin aplicar el principio de responsabilidad unica
	class Person {
		public name: string;
		public gender: Gender;
		public birthDate: Date;

		constructor({ name, gender, birthDate }: PersonProps) {
			this.name = name;
			this.gender = gender;
			this.birthDate = birthDate;
		}
	}

	interface UserProps {
		email: string;
		role: string;
		name: string;
		gender: Gender;
		birthDate: Date;
	}

	class User extends Person {
		public email: string;
		public role: string;
		private _lastAccess: Date;

		constructor({ email, role, name, gender, birthDate }: UserProps) {
			super({ name, gender, birthDate });
			this.email = email;
			this.role = role;
			this._lastAccess = new Date();
		}

		checkCredentials() {
			return true;
		}
	}

	interface UserSettingsProps {
		workingDirectory: string;
		lastOpenFolder: string;
		email: string;
		role: string;
		name: string;
		gender: Gender;
		birthDate: Date;
	}

	class UserSettings extends User {
		public workingDirectory: string;
		public lastOpenFolder: string;
		constructor({
			workingDirectory,
			lastOpenFolder,
			email,
			role,
			name,
			gender,
			birthDate,
		}: UserSettingsProps) {
			super({ email, role, name, gender, birthDate });
			this.workingDirectory = workingDirectory;
			this.lastOpenFolder = lastOpenFolder;
		}
	}

	const newPerson = new Person({
		name: "Mario",
		gender: "M",
		birthDate: new Date("1988-07-04"),
	});
	console.log({ newPerson });

	const newUser = new User({
		email: "unemail@algo.com",
		role: "el mejon",
		name: "Mario",
		gender: "M",
		birthDate: new Date("1988-07-04"),
	});
	console.log({ newUser });

	const newUserSettings = new UserSettings({
		email: "unemail@algo.com",
		role: "el mejon",
		name: "Mario",
		gender: "M",
		birthDate: new Date("1988-07-04"),
		lastOpenFolder: "laUltimaCarpetaAbierta",
		workingDirectory: "esteDirectorio",
	});
	console.log({ newUserSettings });

	//$ Es imposible aplicar el principio de responsabilidad unica con tantas herencias!!!
})();
