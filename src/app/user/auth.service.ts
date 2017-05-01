import { Injectable } from '@angular/core';
import { User } from './user'
import { isNullOrUndefined } from "util";
import { UserService } from "app/user/user.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class AuthService {

  onAuthChange$:Subject<User>;

  constructor() { 
    this.onAuthChange$=new Subject();
  }

  setUser(user:User){
    let userstring=JSON.stringify(user);
    localStorage.setItem('currentUser',userstring);
    this.onAuthChange$.next(user);
  }

  getCurrentUser():User{
    let userString=localStorage.getItem('currentUser');
    if(!isNullOrUndefined(userString)){
      return JSON.parse(userString);
    }
    else 
      return null;
  }

  setToken(token:string){
    localStorage.setItem('accessToken',token);
  }

  getToken(){
    return localStorage.getItem('accessToken');
  }

  logout(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    this.onAuthChange$.next(null);
  }
}
