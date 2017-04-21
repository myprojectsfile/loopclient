import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
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
    let url=this.urlPrefix+'/Users/login?include=user';
    return this.http.post(url,{username:username,password:password},{headers:this.headers}).map(res=>res.json()).catch(err=>{
      return Observable.throw(err); 
    })
  }

  logout(){
    let accessTokenID=localStorage.getItem('accessToken');
    console.log('access token is:'+accessTokenID);
    let url=this.urlPrefix+'/Users/logout';
    return this.http.post(url,{accessTokenID:accessTokenID},{headers:this.headers}).map(res=>res.json()).catch(err=>{
      return Observable.throw(err); 
    })
  }
}
