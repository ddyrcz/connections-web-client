import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private comments;

  private avatar : string;
  private publisher  : string;
  private publishDate : string;

  constructor() { }

  ngOnInit() {
    this.avatar = 'http://www.niksebastian.com/wp-content/uploads/2014/05/sample-2-sm.jpg';
    this.publisher = 'Dawid Dyrcz';
    this.publishDate = '12.12.2016';

    this.comments = [
      {content : 'Greate post!', date : '12.12.2016'},
      {content : 'Greate post!', date : '12.12.2016'}
    ]
  }

}
