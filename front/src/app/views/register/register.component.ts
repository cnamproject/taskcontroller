import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { TaskService } from '../../services/task.service';
import { User } from '@firebase/auth-types';

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

  constructor(private authService: AuthService, private TaskService: TaskService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  //register a new user to the app
  registerWithEmail() {
    this.authService.registerRegular(this.user.email, this.user.password)
      .then((res) => {
        console.log(res);
        this.userService.writeUserData(res.user.uid, this.user.name);
        this.router.navigate(['dashboard']);
        this.TaskService.writeNodeTask(res.user.uid);
      })
      .catch((err) => console.log('error: ' + err));

   
  }

}
