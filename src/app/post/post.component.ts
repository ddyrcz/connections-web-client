import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  private post;

  constructor() { }

  ngOnInit() {
    this.post = {};
    this.post.avatar = 'http://www.niksebastian.com/wp-content/uploads/2014/05/sample-2-sm.jpg';
    this.post.publisherAvatar = 'http://www.niksebastian.com/wp-content/uploads/2014/05/sample-2-sm.jpg';
    this.post.publisher = 'Dawid Dyrcz';
    this.post.publishDate = '12.12.2016';
    this.post.content = 'Hello everyone!';

    this.post.comments = [
      {content : 'Greate post!', date : '12.12.2016'},
      {content : 'Greate post!', date : '12.12.2016'}
    ]
  }

}
