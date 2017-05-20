import { Injectable } from '@angular/core';

const now = new Date();

const MOCK_COMMENTS = [
  {
    'commentatorAvatar': 'https://pickaface.net/gallery/avatar/myspacedixson5247bbe83039a.png',
    'date': new Date(), 'content': 'Great!',
    'commentatorName': 'Dawid', 'commentatorLastname': 'Dyrcz'
  },
  {
    'commentatorAvatar': 'https://pickaface.net/gallery/avatar/myspacedixson5247bbe83039a.png',
    'date': new Date(2017, 1, 23, 12, 20, 0), 'content': 'Great!',
    'commentatorName': 'Jan', 'commentatorLastname': 'Kowalski'
  },
  {
    'commentatorAvatar': 'https://pickaface.net/gallery/avatar/myspacedixson5247bbe83039a.png',
    'date': new Date(2017, 1, 23, 13, 0, 0), 'content': 'Great!',
    'commentatorName': 'Jan', 'commentatorLastname': 'Kowalski'
  },
  {
    'commentatorAvatar': 'https://pickaface.net/gallery/avatar/myspacedixson5247bbe83039a.png',
    'date': new Date(2017, 1, 23, 13, 44, 0), 'content': 'Great!',
    'commentatorName': 'Jan', 'commentatorLastname': 'Kowalski'
  }
]

@Injectable()
export class CommentService {
  getComments(idPost: number) {
    return MOCK_COMMENTS;
  }

  getCommentsCount(idPost: number) {
    return MOCK_COMMENTS.length;
  }
}
