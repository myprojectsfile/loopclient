import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/user/auth.service";
import { User } from "app/user/user";
import { isNullOrUndefined } from "util";
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User=new User();
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.user=this.authService.getCurrentUser();
    if(isNullOrUndefined(this.user)){
      this.router.navigate(['/user/login']);
    }
  }

}
