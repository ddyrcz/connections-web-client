import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'app/shared/model/user.model';
import { UserService } from 'app/core/http/user.service';
import { Post } from 'app/shared/model/post.model';
import { UserPostsService } from 'app/user-details/user-details/services/user-posts.service';
import { OldestPostService } from 'app/shared/services/posts/oldest-post.service';
import { ApplicationDataService } from 'app/core/services/application-data.service';
import { List } from 'linqts';

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

  get detailsOfLoggedUser(): boolean {
    return this.applicationData.loggedInUser._id === this.user._id
  }

  get following(): boolean {
    return this.applicationData.loggedInUser.following.includes(this.user._id)
  }

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private userPostsService: UserPostsService,
    private oldestPostService: OldestPostService,
    private applicationData: ApplicationDataService) { }

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
    this.applicationData.loggedInUser.following.push(this.user._id)
  }

  unfollow() {
    this.userService.unfollow(this.user._id)
    const list = new List<string>(this.applicationData.loggedInUser.following);
    list.Remove(list.FirstOrDefault(x => x === this.user._id))
  }

}
