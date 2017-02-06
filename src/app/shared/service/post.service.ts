import { Injectable } from '@angular/core';
import { Post } from './../model/post'
import { User } from './../model/user'

const MOCK_POSTS: Post[] = [
    new Post(1, 'Hello everyone! This is the best social network page i\'ve ever seen! :D',
        'http://cmsmart.net/blog/wp-content/uploads/cmsmart-social-network.jpg', new User(1, 'Dawid', 'Dyrcz', null, null,
            'https://ab-prod-media-assets.s3.amazonaws.com/1/profile_pictures/raghavender-mittapalli/raghavender-mittapalli-present.png'),
        new Date()),
    new Post(2, 'Great day :)',
        'http://cmsmart.net/blog/wp-content/uploads/cmsmart-social-network.jpg', new User(2, 'Jan', 'Kowalski', null, null,
            'http://www.megacynics.com/img/avatar_sample_01.jpg'),
        new Date())
];

@Injectable()
export class PostService {

    getPosts() {
        return MOCK_POSTS;
    }

    getPost(id: number) {
        return MOCK_POSTS.find((post) => post.id == id);
    }
}
