import { PostProvider } from './05-dependency-inversion-principle-dip-c';
import {
	JsonDataBaseService,
	LocalDataBaseService,
} from "./05-dependency-inversion-principle-dip-c";

export interface Post {
	body: string;
	id: number;
	title: string;
	userId: number;
}

export class PostService {
	private posts: Post[] = [];

	constructor(private _postProvider: PostProvider) {}

	async getPosts() {
		// const jsonDB = new LocalDataBaseService();
		// this.posts = await jsonDB.getFakePosts();

		// const jsonDB = new JsonDataBaseService();
		// this.posts = await jsonDB.getPost();

		this.posts = await this._postProvider.getPosts();

		return this.posts;
	}
}
