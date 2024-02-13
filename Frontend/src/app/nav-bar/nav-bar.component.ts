import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedinUser!: string;
  constructor(private alertify: AlertifyService) { }

  ngOnInit() {
  }

  loggedin() {
    let localUser = localStorage.getItem('userName');
    console.log("localUser" , localUser)
    if(localUser){
      this.loggedinUser = localUser;
    }
    
    return this.loggedinUser;
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.alertify.success("You are logged out !");
    //@ts-ignore
    this.loggedinUser = null;
  }

}
