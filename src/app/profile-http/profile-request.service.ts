import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import {Profile} from '../profile-class/profile'


@Injectable()
export class ProfilesRequestService {

    profile:Profile;

  constructor(private http:HttpClient) { 
    this.profile=new Profile("","",0,0,0,"","",new Date(2019,2,6));

  }

  profileRequest(userName){
    

      var userInput = userName;
      

    interface ApiResponse{
      login:string;
      avatar_url:string;
      following:number;
      followers:number;
      public_repos:number;
      location:string;
      html_url:string;
      completeDate:Date;
    }
    let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>('https://api.github.com/users/'+userInput).toPromise().then(response=>{
            
            this.profile.login=response.login
            this.profile.avatar_url=response.avatar_url
            this.profile.following=response.following
            this.profile.followers=response.followers
            this.profile.public_repos=response.public_repos
            this.profile.location=response.location
            this.profile.html_url=response.html_url
            this.profile.completeDate=response.completeDate

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
          this.profile.completeDate=new Date(2019,2,6)
                reject(error)
            }
        )
    })

    return promise
  }
}
