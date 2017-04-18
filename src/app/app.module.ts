import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {PostService} from './blog/post.service';
import {UserService} from './user/user.service';
import {AuthService} from './user/auth.service';
import { PostDetailComponent } from './blog/post-detail/post-detail.component';
import { PostFormComponent } from './blog/post-form/post-form.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';

const appRoutes: Routes = [
  {path: 'blog', component: BlogComponent},
  {path: 'home', component: HomeComponent},
  {path: 'blog/:id', component: PostDetailComponent},
  {path: 'blog/:id/edit', component: PostFormComponent},
  {path: 'newPost', component: PostFormComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/profile', component: ProfileComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: PagenotfoundComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    PagenotfoundComponent,
    PostDetailComponent,
    PostFormComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService,
    UserService,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
