import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthService } from "app/user/auth.service";

@Injectable()
export class UserService {
  
loggedIn=false;

headers= new Headers({
    'Content-Type': 'application/json',
    'Authorization':localStorage.getItem('accessToken')
  });

  urlPrefix= 'http://127.0.0.1:3000/api';
  // urlPrefix= 'http://127.0.0.1:4001/api';
  
  constructor(private http: Http,private authService:AuthService) {

  }

  login(username:string,password:string):Observable<any>{
    let url=this.urlPrefix+'/Accounts/login?include=user';
    return this.http.post(url,{username:username,password:password},{headers:this.headers}).map(res=>res.json()).catch(err=>{
      return Observable.throw(err); 
    })
  }

  logout(){
    let accessTokenID=localStorage.getItem('accessToken');

    let header= new Headers({
    'Content-Type': 'application/json',
    'Authorization':accessTokenID
    });

    console.log('Authorization header is:'+JSON.stringify(this.headers));
    console.log('accessTokenID:'+accessTokenID);
    let url=this.urlPrefix+'/Accounts/logout';
    return this.http.post(url,{accessTokenID:accessTokenID},{headers:header}).map(res=>res.json()).catch(err=>{
      return Observable.throw(err); 
    })
  }
}
