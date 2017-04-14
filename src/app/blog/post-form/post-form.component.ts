import { Component, OnInit } from '@angular/core';
import {Post} from 'app/blog/post';
import {PostService} from 'app/blog/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post= new Post();
  errMessage = '';
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.postService.savePost(this.post)
      .subscribe(
        res => {
          this.router.navigate(['/blog', res.id]);
      },
        err => {
          this.errMessage = err.message;
      });
  }

}
