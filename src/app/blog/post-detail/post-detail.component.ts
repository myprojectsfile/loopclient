import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PostService} from 'app/blog/post.service';
import 'rxjs/add/operator/switchMap';
import {Post} from 'app/blog/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})


export class PostDetailComponent implements OnInit {
  post= new Post();

  constructor(private route: ActivatedRoute, private postService: PostService) { }


  ngOnInit() {
    this.route.params.switchMap((params: Params) => {
      const id = params['id'];
      return this.postService.getPost(id);
    }).subscribe(post => {
      this.post = post;
    }, err => {console.log(err); });
      // .map(params => params['id'])
      // .switchMap(id => this.postService.getPost(id))
      // .subscribe(post => this.post = post);
  }

}
