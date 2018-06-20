import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {tache} from '../../beans/tache'
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { TaskService } from '../../services/task.service';
import { PriorityService } from '../../services/priority.service';
import { User } from '@firebase/auth-types';
import {MatSnackBar} from '@angular/material';
import { forEach } from '@angular/router/src/utils/collection';
import { ISize } from 'selenium-webdriver';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
task = new tache();

  options: FormGroup;

  constructor(fb: FormBuilder,public snackBar: MatSnackBar, private priorityService: PriorityService, private authService: AuthService, private userService: UserService, private taskService: TaskService, private router: Router) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    
  }
  user = this.userService.getUserDetails();
  isLogged = this.userService.isLoggedIn();
  priorities = this.priorityService.getPriorities();
  fixe = {
    lundi : false,
    mardi : false,
    mercredi : false,
    jeudi : false,
    vendredi : false,
    samedi : false,
    dimanche : false
  };
  

  ngOnInit() {
    console.log("user:");console.log(this.user);
    console.log("isloggedin:");console.log(this.isLogged);
    console.log("all priorities:");console.log(this.priorities);
  }

  displayTask(){
    console.log(this.task);
  }

  createTask(){
    var tmp = this.authService.getAuthObject();

    var today = new Date();
    this.task.dateAjout = (today.getFullYear()+"-"+today.getMonth()+"-"+today.getDay());
    this.task.heureAjout = (today.getHours()+":"+today.getMinutes()+":"+today.getSeconds());
 var cpt = 0;
    if(this.task.isFixe){
      for (let key in this.fixe) {
        if(this.fixe[key]){
          this.task.jourFixe += key;
          if(cpt < Object.keys(this.fixe).length -1){
            this.task.jourFixe +=";";
          }
        }cpt++;
          }
          
    } 
    
    this.taskService.writeTaskData(tmp.currentUser.uid, this.task);
    this.snackBar.open("Tâche ajoutée", "close", {
      duration: 5000,
    });
  }

}
