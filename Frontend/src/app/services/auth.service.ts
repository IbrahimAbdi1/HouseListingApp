import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { User, UserForLogin } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseurl = environment.baseUrl
constructor(private http: HttpClient) { }

authUser(user: UserForLogin) {
//   let UserArray = [];
//   if (localStorage.getItem('Users')) {
//     {/* @ts-ignore */}
//     UserArray = JSON.parse(localStorage.getItem('Users'));
//   }
//   {/* @ts-ignore */}
//   return UserArray.find(p => p.userName === user.userName && p.password === user.password);
return this.http.post(this.baseurl + '/account/login',user)
}

registerUser(user: User){
  return this.http.post(this.baseurl + '/account/register',user)
}

}
