import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  private post;

  private comments;

  constructor() { }

  ngOnInit() {
    this.post = {};
    this.post.publisherAvatarUrl = 'http://www.niksebastian.com/wp-content/uploads/2014/05/sample-2-sm.jpg';
    this.post.publisher = 'Dawid Dyrcz';
    this.post.publishDate = '12.12.2016';
    this.post.content = 'Hello everyone!';

    this.loadComments();
  }

  loadComments() {
    this.comments = [
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
  }

}
