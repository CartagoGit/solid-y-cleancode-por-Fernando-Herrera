// Hay que agregar la dependencia de axios ```yarn add axios```
// import axios from "axios";

import { HttpClient } from "./02-open-close-principle-ocp-c";

export class TodoService {
	constructor(private _http: HttpClient) {}

	// async getTodoItems() {
	// 	const { data } = await axios.get(
	// 		"https://jsonplaceholder.typicode.com/todos/"
	// 	);
	// 	return data;
	// }
	async getTodoItems(uri: string) {
		const { data } = await this._http.get(uri);
		return data;
	}
}

export class PostService {
	constructor(private _http: HttpClient) {}
	// async getPosts() {
	// 	const { data } = await axios.get(
	// 		"https://jsonplaceholder.typicode.com/posts"
	// 	);
	// 	return data;
	// }
	async getPosts(uri: string) {
		const { data } = await this._http.get(uri);
		return data;
	}
}

export class PhotosService {
	constructor(private _http: HttpClient) {}
	// async getPhotos() {
	// 	const { data } = await axios.get(
	// 		"https://jsonplaceholder.typicode.com/photos"
	// 	);
	// 	return data;
	// }
	async getPhotos(uri: string) {
		const { data } = await this._http.get(uri);
		return data;
	}
}
