import { Injectable } from '@angular/core';

const MOCK_POSTS = [
    {
        'id': 1,        
        'publisherAvatarUrl': 'https://ab-prod-media-assets.s3.amazonaws.com/1/profile_pictures/raghavender-mittapalli/raghavender-mittapalli-present.png',
        'publisher': 'Dawid Dyrcz',
        'publishDate': '12.12.2016',
        'content': 'Hello everyone! This is the best social network page i\'ve ever seen! :D',
        'image': 'http://cmsmart.net/blog/wp-content/uploads/cmsmart-social-network.jpg'
    }
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
