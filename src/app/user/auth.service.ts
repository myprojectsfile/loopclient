import { Injectable } from '@angular/core';
import { User } from './user'
import { isNullOrUndefined } from "util";
import { UserService } from "app/user/user.service";
@Injectable()
export class AuthService {

  

  constructor() { }

  setUser(user:User){
    let userstring=JSON.stringify(user);
    localStorage.setItem('currentUser',userstring);
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
  }
}
