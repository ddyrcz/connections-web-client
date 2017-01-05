import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  @Output()
  private comment : string;

  @Input()
  private avatarUrl : string;

  constructor() { }

  ngOnInit() {
    this.comment = 'sample comment';
  }

  click(){
    console.log(this.comment);
  }

}
