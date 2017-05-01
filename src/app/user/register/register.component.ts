import { Component, OnInit } from '@angular/core';
import { User } from "app/user/user";
import { UserService } from "app/user/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User=new User();
  
  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  onRegister(){
    this.userService.register(this.user)
    .subscribe(
      res=>{
        console.log("new user registered with data:"+res);
      },
      err=>{
        console.log(err);
      }
    );
  }
}
