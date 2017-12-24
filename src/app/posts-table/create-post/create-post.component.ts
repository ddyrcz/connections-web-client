import { Component, OnInit } from '@angular/core';
import { ApplicationDataService } from 'app/core/services/application-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Post } from 'app/shared/model/post.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(public applicationData: ApplicationDataService,
    private dialogRef: MatDialogRef<CreatePostComponent>) { }

  ngOnInit() {
  }

  createPost(content: string) {

    let post: Post = new Post();
    post.content = content;
    post.createdAt = new Date();
    post.user = this.applicationData.loggedInUser;
    post.imageUrl = "https://racetaylormade.com/wp-content/uploads/2015/02/S6-Side_Front.jpg"

    this.dialogRef.close(post)
  }
}
