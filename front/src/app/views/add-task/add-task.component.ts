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

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  objectKeys = Object.keys;
task: tache = {
  id_tache: "",
  libelle: "",
  description: "",
  tempsEstime: "",
  isFixe: false,
  jourFixe: 0,
  heureFixeDebut: "",
  heureFixeFin: "",
  date: "",
  heureDebut: "",
  heureFin: "",
  idType: "",
  idPriorite: "",
  idUtilisateur: ""
};
  options: FormGroup;

  constructor(fb: FormBuilder, private priorityService: PriorityService, private authService: AuthService, private userService: UserService, private taskService: TaskService, private router: Router) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    
  }
  user = this.userService.getUserDetails();
  isLogged = this.userService.isLoggedIn();
  priorities = this.priorityService.getPriorities();
  

  ngOnInit() {
    console.log("user:");console.log(this.user);
    console.log("isloggedin:");console.log(this.isLogged);
    console.log("all priorities:");console.log(this.priorities);
  }

  createTask(){
    this.taskService.writeTaskData(this.userService.getUserUid(), tache);
  }

}
