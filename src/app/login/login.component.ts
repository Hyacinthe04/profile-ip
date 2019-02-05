import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Profile } from '../profile-class/profile'
import { promise } from 'protractor';
import { ProfilesRequestService } from '../profile-http/profile-request.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [ProfilesRequestService], //add the providers to the component
  // styleUrls: ['./profile.component.css']
})
export class LoginComponent implements OnInit {
  profile: Profile;
  userName = "";

submitInput() {

  this.profileService.profileRequest(this.userName)
}

  constructor(private profileService:ProfilesRequestService) {
    // this.profile = new Profile("", "", 0, 0, 0, "", "");
    // this.profile = profileService.getprofile();
  }
  // this.alertService = alertService;
  // // }

  // profileRequest() {

  //   interface ApiResponse {
  //     login: string; //   //   this.profileService.profileRequest()
  //   //   this.profile=this.profileService.profile
  //   // }

  //     avatar_url: string;
  //     following: number;
  //     followers: number;
  //     public_repos: number;
  //     location: string;
  //     html_url: string;
  //   }
  //   let promise = new Promise((resolve, reject) => {
  //     this.http.get<ApiResponse>("https://api.github.com/users/Hyacinthe04").toPromise().then(response => {

  //       this.profile.login = response.login
  //       this.profile.avatar_url = response.avatar_url
  //       this.profile.following = response.following
  //       this.profile.followers = response.followers
  //       this.profile.public_repos = response.public_repos
  //       this.profile.location = response.location
  //       this.profile.html_url = response.html_url

  //       resolve()
  //     },
  //       error => {
  //         this.profile.login = "yui"
  //         this.profile.avatar_url = "jki"
  //         this.profile.following = 6
  //         this.profile.followers = 8
  //         this.profile.public_repos = 9
  //         this.profile.location = "juy"
  //         this.profile.html_url = "kolo"
  //         reject(error)
  //       }
  //     )
  //

    // return promise
    ngOnInit(){
      this.profileService.profileRequest("Hyacinthe04")
         this.profile=this.profileService.profile
      }

 
  }




