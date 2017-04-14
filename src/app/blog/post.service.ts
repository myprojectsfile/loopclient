import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Post} from './post';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class PostService {
  headers= new Headers({
    'Content-Type': 'application/json'
  });
  urlPrefix= 'http://127.0.0.1:4001/api';
  constructor(private http: Http) {

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
    const url = this.urlPrefix + '/posts';
    return this.http.post(url, post, {headers: this.headers}).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    });
  }

}
