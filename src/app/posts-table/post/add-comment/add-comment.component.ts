import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  @Input()
  private commentatorAvatarUrl: string;

  constructor() { }

  @Output()
  private onCommentAddEvent = new EventEmitter<string>();

  ngOnInit() {

  }

  onCommentAdd(comment: string) {
    this.onCommentAddEvent.emit(comment);
  }
}
