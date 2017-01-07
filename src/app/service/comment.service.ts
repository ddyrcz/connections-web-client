import { Injectable } from '@angular/core';

const MOCK_COMMENTS = [
      {
        'commentatorAvatar': 'http://www.niksebastian.com/wp-content/uploads/2014/05/sample-2-sm.jpg',
        'date': '1d', 'content': 'Great!',
        'commentatorName': 'Dawid', 'commentatorLastname': 'Dyrcz'
      },
      {
        'commentatorAvatar': 'http://www.niksebastian.com/wp-content/uploads/2014/05/sample-2-sm.jpg',
        'date': '1d', 'content': 'Great!',
        'commentatorName': 'Jan', 'commentatorLastname': 'Kowalski'
      },
      {
        'commentatorAvatar': 'http://www.niksebastian.com/wp-content/uploads/2014/05/sample-2-sm.jpg',
        'date': '1d', 'content': 'Great!',
        'commentatorName': 'Jan', 'commentatorLastname': 'Kowalski'
      },
      {
        'commentatorAvatar': 'http://www.niksebastian.com/wp-content/uploads/2014/05/sample-2-sm.jpg',
        'date': '1d', 'content': 'Great!',
        'commentatorName': 'Jan', 'commentatorLastname': 'Kowalski'
      }
    ]

@Injectable()
export class CommentService {
    getComments(){
        return MOCK_COMMENTS;
    }
}
