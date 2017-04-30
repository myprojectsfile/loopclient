import { Component, Input, forwardRef } from '@angular/core';
import { AuthService } from "app/user/auth.service";
import { User } from "app/user/user";
import { isNullOrUndefined } from "util";
import { UserService } from "app/user/user.service";
import { Router } from "@angular/router";

export var parentProvider = {
    provide: AppComponent,
    useExisting: forwardRef(function () { return AppComponent; })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [parentProvider]
})
export class AppComponent {
  title = 'app works!';

  user:User=new User();
  @Input() loggedIn:boolean=false;

  constructor(private authService:AuthService,private userService:UserService,private router:Router) {
    this.user=this.authService.getCurrentUser();
    if(this.user && !isNullOrUndefined(this.user))
    {
      this.loggedIn=true;
    }
  }

  ngOnInit(){

  } 

  logout(){
    this.userService.logout().subscribe(res=>{
      this.authService.logout();
      this.loggedIn=false;
      this.router.navigate(['/home']);
    },err=>{
      console.log(err);
    })
    
  }
}
