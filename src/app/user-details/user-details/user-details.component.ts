import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'app/shared/model/user.model';
import { UserService } from 'app/core/http/user.service';
import { Post } from 'app/shared/model/post.model';
import { UserPostsService } from 'app/user-details/user-details/services/user-posts.service';
import { OldestPostService } from 'app/shared/services/posts/oldest-post.service';

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

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private userPostsService: UserPostsService,
    private oldestPostService: OldestPostService) { }

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
}
