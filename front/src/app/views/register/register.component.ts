import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = {
    email: '',
    password: '',
    name: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  //register a new user to the app
  registerWithEmail() {
    this.authService.registerRegular(this.user.email, this.user.password, this.user.name)
      .then((res) => {
        console.log(res);
        this.router.navigate(['dashboard']);
      })
      .catch((err) => console.log('error: ' + err));
  }

}
