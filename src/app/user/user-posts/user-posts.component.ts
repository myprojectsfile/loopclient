import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/user/auth.service";
import { User } from "app/user/user";
import { PostService } from "app/blog/post.service";
import { ActivatedRoute } from "@angular/router";
import { Post } from "app/blog/post";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  constructor(private authService: AuthService, private postService: PostService, private route: ActivatedRoute) {
    this.user = this.authService.getCurrentUser();
  }
  posts: Post[] = [];
  user: User = new User();

  ngOnInit() {
    let userId = this.route.snapshot.params['id'];
    let query = {
      include: ["account"]
    };
    let filter = encodeURI(JSON.stringify(query));

    this.postService.getUserPost(userId, filter).subscribe(
      res => {
        this.posts=res as Post[];
      },
      err => {
        console.log(err);
      }
    ); 
  }

}
