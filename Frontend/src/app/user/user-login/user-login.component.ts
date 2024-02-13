import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertifyService } from '../../services/alertify.service';
import { Router } from '@angular/router';
import { LoginRes } from '../../model/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    // const token = this.authService.authUser(loginForm.value);
    // if (token) {
    //   localStorage.setItem('token', token.userName);
    //   this.alertify.success('Login Successful');
    //   this.router.navigate(['/']);
    // } else {
    //   this.alertify.error('User id or password is wrong');
    // }
    this.authService.authUser(loginForm.value).subscribe(
      //@ts-ignore
      (res: LoginRes) => {
        console.log(res);
        const user = res;
        localStorage.setItem('token', user.token);
        localStorage.setItem('userName', user.userName)
        this.alertify.success('Login Successful');
        this.router.navigate(['/']);
      },
      (error) =>{
        console.log(error)
        this.alertify.error(error.error)
      }
    )
  }

}
