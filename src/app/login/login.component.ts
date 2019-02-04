import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Profile} from '../profile-class/profile'
import { promise } from 'protractor';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profile:Profile;

  constructor(private http:HttpClient) { 
    this.profile=new Profile("","",0,0,0,"","");
  }

  profileRequest(){

    interface ApiResponse{
        login:string;
        avatar_url:string;
        following:number;
        followers:number;
        public_repos:number;
        location:string;
        html_url:string;
    }
    let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>("https://api.github.com/users.apiUrl").toPromise().then(response=>{
            
            this.profile.login=response.login
            this.profile.avatar_url=response.avatar_url
            this.profile.following=response.following
            this.profile.followers=response.followers
            this.profile.public_repos=response.public_repos
            this.profile.location=response.location
            this.profile.html_url=response.html_url

            resolve()
        },
        error=>{
          this.profile.login="yui"
          this.profile.avatar_url="jki"
          this.profile.following=6
          this.profile.followers=8
          this.profile.public_repos=9
          this.profile.location="juy"
          this.profile.html_url="kolo"
                reject(error)
            }
        )
    })

    return promise
  }
  ngOnInit() {
  }
}