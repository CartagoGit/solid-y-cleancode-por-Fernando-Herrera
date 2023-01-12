(() => {
	//* Aplicar el principio de responsabilidad única
	//* Priorizar la composición frente a la herencia

	type HtmlType = "input" | "select" | "textarea" | "radio";

	class HtmlElement {
		constructor(public id: string, public type: HtmlType) {}
	}

	class InputAttributes {
		constructor(public value: string, public placeholder: string) {}
	}

	class InputEvents {
		setFocus() {}
		getValue() {}
		isActive() {}
		removeValue() {}
	}

	//? Idea para la nueva clase InputElement
	class InputElement {
		public attributes: InputAttributes;
		public events: InputEvents;
		public html: HtmlElement;

		constructor(value: string, placeholder: string, id: string) {
			this.html = new HtmlElement(id, "input");
			this.attributes = new InputAttributes(value, placeholder);
			this.events = new InputEvents();
		}
	}

	// const nameField = new InputEvents(
	// 	"Fernando",
	// 	"Enter first name",
	// 	"txtName"
	// );

	const nameField = new InputElement(
		"Fernando",
		"Enter first name",
		"txtName"
	);

	console.log({ nameField });
})();