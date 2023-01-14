interface Bird {
	eat(): void;
}

interface FlyingBird {
	fly(): number;
}

interface RunningBird {
	run(): void;
}

interface SwimmerBirds {
	swim(): void;
}

class Tucan implements Bird, FlyingBird {
	public fly() {
		return 100;
	}
	public eat() {}
}

class Humminbird implements Bird, FlyingBird {
	public fly() {
		return 200;
	}
	public eat() {}
}

class Ostrich implements Bird, RunningBird {
	// public fly() {
	// 	throw Error("El avestruz no vuela");
	// }
	public eat() {}
	public run() {}
}

class Penguin implements Bird, SwimmerBirds {
	public eat() {}
	public swim() {}
}
