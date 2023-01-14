import { PostService } from "./05-dependency-inversion-principle-dip-b";

import {
	WebApiPostService,
	JsonDataBaseService,
	LocalDataBaseService,
} from "./05-dependency-inversion-principle-dip-c";

// Main
(async () => {
	// const providerFake = new LocalDataBaseService();
	// const provider = new LocalDataBaseService();
	const provider = new WebApiPostService();
	// const provider = new JsonDataBaseService();

	// const postServiceFake = new PostService(providerFake);
	const postService = new PostService(provider);

	// const postsFake = await postServiceFake.getPosts();
	const posts = await postService.getPosts();

	// console.log({ postsFake });
	console.log({ posts });
})();
