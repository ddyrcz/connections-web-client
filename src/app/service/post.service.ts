import { Injectable } from '@angular/core';

const MOCK_POSTS = [
    {
        'id' : 1,
        'publisherAvatarUrl' : 'http://www.niksebastian.com/wp-content/uploads/2014/05/sample-2-sm.jpg',
        'publisher': 'Dawid Dyrcz',
        'publishDate' : '12.12.2016',
        'content' : 'Hello everyone!'
    }
];

//@Injectable()
export class PostService {

    getPosts(){
        return MOCK_POSTS;
    }

    getPost(id : number){
         return MOCK_POSTS.find((post) => post.id == id);
    }
}
