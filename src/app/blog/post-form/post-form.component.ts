import { Component, OnInit } from '@angular/core';
import {Post} from 'app/blog/post';
import {PostService} from 'app/blog/post.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post= new Post();
  errMessage = '';
  // loading = true;

  constructor(private postService: PostService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.switchMap((params:Params)=>{
      let id=params['id'];
      if (typeof id !== 'undefined' &&id !== null){
        return this.postService.getPost(id);
      }
      else {return Observable.of(this.post)}
    }).subscribe(
            res => {
        this.post = res as Post;
      },
      err => {
        console.log(err);
      }
    );

  }

  onSubmit() {
    if (this.post.id) {
      this.postService.updatePost(this.post)
        .subscribe(
          res => {
            this.router.navigate(['/blog', res.id]);
          },
          err => {
            this.errMessage = err.message;
          });
    }else {
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

}
