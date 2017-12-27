import { Component, OnInit, ElementRef } from '@angular/core';
import { ApplicationDataService } from 'app/core/services/application-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Post } from 'app/shared/model/post.model';
import { ViewChild } from '@angular/core';
import { FileService } from 'app/core/http/file.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  attachedImageUrl: string | undefined

  @ViewChild('fileInput') input: ElementRef

  constructor(public applicationData: ApplicationDataService,
    private dialogRef: MatDialogRef<CreatePostComponent>,
    private fileService: FileService) { }

  ngOnInit() {
  }

  createPost(content: string) {

    let post: Post = new Post();
    post.content = content;
    post.createdAt = new Date();
    post.user = this.applicationData.loggedInUser;
    post.imageUrl = this.attachedImageUrl

    this.dialogRef.close(post)
  }

  detachImage() {
    this.attachedImageUrl = undefined
  }

  async uploadImage() {
    let formData = new FormData();
    formData.append('file', this.input.nativeElement.files[0])

    const { fileUrl } = await this.fileService.upload(formData);

    this.attachedImageUrl = fileUrl;
  }
}
