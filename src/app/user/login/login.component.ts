import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from "../user";
import { UserService } from "../user.service";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { AppComponent } from "app/app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new User();

  constructor(private userService:UserService,private authService:AuthService,private router:Router,private appComponent:AppComponent) { }

  ngOnInit() {
  }

  onLogin(){
    this.userService.login(this.user.username,this.user.password).subscribe(
      res=>{
        this.authService.setUser(res.user as User);
        this.authService.setToken(res.id);
        //this.appComponent.loggedIn=true;
        this.router.navigate(['/user/profile']);
      },
      err=>{
        console.log(err);
      }
    );
  }
}
