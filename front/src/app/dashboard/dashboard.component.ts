import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  
  constructor(private userService: UserService, private authService: AuthService ){ }

  user = this.userService.getUserDetails();

  ngOnInit() {

  }

  logOut(){
    this.authService.logout();
    console.log("utilisateur déconnecté");
  }

}