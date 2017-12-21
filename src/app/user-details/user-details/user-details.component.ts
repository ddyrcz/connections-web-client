import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'app/shared/model/user.model';
import { UserService } from 'app/core/http/user.service';
import { Post } from 'app/shared/model/post.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User;

  posts: Post[] = []

  constructor(
    private route: ActivatedRoute,
    private userService: UserService) { }

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
    await this.loadPosts();
  }

  async loadPosts() {
    const posts = await this.userService.getUserPosts(this.user.id);
    this.posts.push(...posts);
  }
}
