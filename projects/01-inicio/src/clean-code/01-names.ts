(() => {
	// Ejemplo
	// Archivos a evaluar - files to evaluate
	const filesToEvaluate = [
		{ id: 1, toDelete: false },
		{ id: 2, toDelete: false },
		{ id: 3, toDelete: true },
		{ id: 4, toDelete: false },
		{ id: 5, toDelete: false },
		{ id: 7, toDelete: true },
	] as { id: number; toDelete: boolean }[];

	// Archivos marcados para borrar - files to delete
	const filesToDelete: boolean[] = filesToEvaluate.map((file) => file.toDelete);

	// MAL
	class AbstractUser {}
	class UserMixin {}
	class UserImplementation {}
	interface IUser {}

	// Mejor
	class User {}
	interface User {}

	// Todo: Tarea

	// día de hoy - today
	const today: Date = new Date();

	// días transcurridos - elapsed time in days
	const elapsedDays: number = 23;

	// número de archivos en un directorio - number of files in directory
	const numFilesInFolder: number = 33;

	// primer nombre - first name
	const firstName: string = "Fernando";

	// primer apellido - last name
	const surname: string = "Herrera";

	// días desde la última modificación - days since modification
	const daysSinceModification = 12;

	// cantidad máxima de clases por estudiante - max classes per student
	const maxClassesPerStudent: number = 6;
})();
