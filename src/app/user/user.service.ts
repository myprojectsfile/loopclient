import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

headers= new Headers({
    'Content-Type': 'application/json'
  });

  urlPrefix= 'http://127.0.0.1:4001/api';
  
  constructor(private http: Http) {

  }

  login(username:string,password:string):Observable<any>{
    let url=this.urlPrefix+'/Users/login?include=user';
    return this.http.post(url,{username:username,password:password},{headers:this.headers}).map(res=>res.json()).catch(err=>{
      return Observable.throw(err); 
    })
  
  }

}
