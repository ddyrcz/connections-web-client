import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'app/shared/model/user.model';
import { UserService } from 'app/core/http/user.service';
import { Post } from 'app/shared/model/post.model';
import { UserPostsService } from 'app/user-details/user-details/services/user-posts.service';
import { OldestPostService } from 'app/shared/services/posts/oldest-post.service';
import { ApplicationDataService } from 'app/core/services/application-data.service';
import { List } from 'linqts';
import { FileService } from 'app/core/http/file.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  providers: [
    UserPostsService,
    OldestPostService
  ]
})
export class UserDetailsComponent implements OnInit {

  user: User;

  posts: Post[] = []

  @ViewChild('fileInput') input: ElementRef

  get detailsOfLoggedUser(): boolean {
    if (this.applicationData.loggedInUser)
      return this.applicationData.loggedInUser._id === this.user._id

    return false
  }

  get following(): boolean {
    if (this.applicationData.loggedInUser)
      return this.applicationData.loggedInUser.following.includes(this.user._id)

    return false
  }

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private userPostsService: UserPostsService,
    private oldestPostService: OldestPostService,
    private applicationData: ApplicationDataService,
    private fileService: FileService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      const id = map.get('id');
      if (id) {
        this.loadUserInformation(id);
      }
    });
  }

  async loadUserInformation(id: string) {
    this.user = await this.userService.getUserData(id);
    this.posts = [];
    this.oldestPostService.reset();
    await this.loadPosts();
  }

  async loadPosts() {
    const posts = await this.userPostsService.getUserPosts(this.user._id);
    this.posts.push(...posts);
  }

  follow() {
    this.userService.follow(this.user._id)
    if (this.applicationData.loggedInUser) {
      var loggedInUser = this.applicationData.loggedInUser
      loggedInUser.following.push(this.user._id)
      // update local storage
      this.applicationData.loggedInUser = loggedInUser
    }
  }

  unfollow() {
    this.userService.unfollow(this.user._id)
    if (this.applicationData.loggedInUser) {
      var loggedInUser = this.applicationData.loggedInUser
      const list = new List<string>(loggedInUser.following);
      list.Remove(list.FirstOrDefault(x => x === this.user._id))
      //update local storage
      this.applicationData.loggedInUser = loggedInUser
    }
  }

  async uploadImage() {
    let formData = new FormData();
    formData.append('file', this.input.nativeElement.files[0])

    const { fileUrl } = await this.fileService.upload(formData);

    this.userService.updateAvatar(fileUrl);

    var loggedInUser = this.applicationData.loggedInUser
    if (loggedInUser) {
      loggedInUser.AvatarUrl = this.user.AvatarUrl = fileUrl
      this.applicationData.loggedInUser = loggedInUser
    }

    this.updateUserAvatarInEachPost(fileUrl);
  }

  updateUserAvatarInEachPost(newAvatarUrl: string) {
    for (const post of this.posts) {
      post.user.AvatarUrl = newAvatarUrl;

      for (const comment of post.comments) {
        if (comment.user._id == this.user._id) {
          comment.user.AvatarUrl = newAvatarUrl;
        }
      }
    }
  }
}
