import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApplicationDataService } from 'app/core/services/application-data.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  constructor(private applicationData: ApplicationDataService) { }

  @Output() onCommentAdded = new EventEmitter<string>();

  comment: string | undefined;

  ngOnInit() {
  }

  addComment(comment: string) {
    this.onCommentAdded.emit(comment);
    this.comment = undefined;
  }
}
