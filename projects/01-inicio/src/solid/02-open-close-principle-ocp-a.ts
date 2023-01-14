import {
	PhotosService,
	PostService,
	TodoService,
} from "./02-open-close-principle-ocp-b";
import { HttpClient } from "./02-open-close-principle-ocp-c";

(async () => {
	const httpClient: HttpClient = new HttpClient();

	const todoService = new TodoService(httpClient);
	const postService = new PostService(httpClient);
	const photosService = new PhotosService(httpClient);

	const todos = await todoService.getTodoItems(
		"https://jsonplaceholder.typicode.com/todos/"
	);
	const posts = await postService.getPosts(
		"https://jsonplaceholder.typicode.com/posts"
	);
	const photos = await photosService.getPhotos(
		"https://jsonplaceholder.typicode.com/photos"
	);

	console.log({ todos, posts, photos });
})();
