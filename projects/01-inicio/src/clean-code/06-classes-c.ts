(() => {
	type Gender = "M" | "F";

	interface PersonProps {
		name: string;
		gender: Gender;
		birthDate: Date;
	}

	// $ APLICANDO EL PRINCIPIO DE RESPONSABILIDAD UNICA
	// $ Priorizar la composición frente a la herencia

	class Person {
		public birthDate: Date;
		public gender: Gender;
		public name: string;

		constructor({ name, gender, birthDate }: PersonProps) {
			this.name = name;
			this.gender = gender;
			this.birthDate = birthDate;
		}
	}

	interface UserProps {
		email: string;
		role: string;
	}

	class User {
		public email: string;
		public role: string;
		private _lastAccess: Date;

		constructor({ email, role }: UserProps) {
			this.email = email;
			this.role = role;
			this._lastAccess = new Date();
		}

		checkCredentials() {
			return true;
		}
	}

	interface SettingsProps {
		lastOpenFolder: string;
		workingDirectory: string;
	}

	class Settings {
		public workingDirectory: string;
		public lastOpenFolder: string;
		constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
			this.workingDirectory = workingDirectory;
			this.lastOpenFolder = lastOpenFolder;
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

	class UserSettings {
		public person: Person;
		public user: User;
		public settings: Settings;

		constructor({
			workingDirectory,
			lastOpenFolder,
			email,
			role,
			name,
			gender,
			birthDate,
		}: UserSettingsProps) {
			this.person = new Person({name, gender, birthDate})
			this.user = new User({email, role})
			this.settings = new Settings({workingDirectory, lastOpenFolder})
		}
	}

	// const newPerson = new Person({
	// 	birthDate: new Date("1988-07-04"),
	// 	gender: "M",
	// 	name: "Mario",
	// });
	// console.log({ newPerson });

	// const newUser = new User({
	// 	birthDate: new Date("1988-07-04"),
	// 	email: "unemail@algo.com",
	// 	gender: "M",
	// 	name: "Mario",
	// 	role: "el mejon",
	// });
	// console.log({ newUser });

	const newUserSettings = new UserSettings({
		birthDate: new Date("1988-07-04"),
		email: "unemail@algo.com",
		gender: "M",
		lastOpenFolder: "laUltimaCarpetaAbierta",
		name: "Mario",
		role: "el mejon",
		workingDirectory: "esteDirectorio",
	});
	console.log({ newUserSettings });

	//$ Es imposible aplicar el principio de responsabilidad unica con tantas herencias!!!
})();
