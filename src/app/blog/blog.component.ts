import { Component, OnInit } from '@angular/core';
import {PostService} from './post.service';
import {Post} from './post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
  posts:Post[]=[];

  constructor(private postServie:PostService) { }

  ngOnInit() {
    //get posts
    this.postServie.getPosts().subscribe(
      res=>{
        this.posts=res as Post[];
        console.log('blog component initialized.');
      },
      err=>{
        console.log(err);
      }
    );
  }

}
