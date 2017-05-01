import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Post} from './post';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthService } from "app/user/auth.service";
import { User } from "app/user/user";


@Injectable()
export class PostService {

  headers= new Headers({
    'Content-Type': 'application/json',
    'Authorization':this.authService.getToken()
  });

  // urlPrefix= 'http://127.0.0.1:4001/api';
  urlPrefix= 'http://127.0.0.1:3000/api';
  constructor(private http: Http,private authService:AuthService) {

  }


  getPosts(): Observable<Post[]> {
    const url = this.urlPrefix + '/posts';
    return this.http.get(url, this.headers).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    });
  };

  getPost(id: string): Observable<Post> {
    const url = this.urlPrefix + '/posts/' + id;
    return this.http.get(url, this.headers).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    });
  };

  savePost(post: Post): Observable<any> {
    let user=this.authService.getCurrentUser() as User;
    let userId=user.id;

    const url = this.urlPrefix + '/Accounts/'+userId+'/posts';
    return this.http.post(url, post, {headers: this.headers}).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    });
  }

  updatePost(post: Post): Observable<any> {
    let accessTokenID=localStorage.getItem('accessToken');
    let header= new Headers({
    'Content-Type': 'application/json',
    'Authorization':accessTokenID
    });
    const url = this.urlPrefix + '/posts/'+post.id;
    return this.http.put(url, post, {headers: header}).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    });
  }
}
