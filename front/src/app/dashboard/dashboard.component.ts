import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private authService: AuthService ){ }

  ngOnInit() {

  }

  logOut(){
    this.authService.logout();    console.log("LOG OUT OUAIS OUAIS OUAIS");
  }

}