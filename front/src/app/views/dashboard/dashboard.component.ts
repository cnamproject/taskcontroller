import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD:front/src/app/dashboard/dashboard.component.ts

import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { TaskService } from '../services/task.service';
=======
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { TaskService } from '../../services/task.service';
>>>>>>> dbc043b3217d52468c4037a1f9325fe3444fefd2:front/src/app/views/dashboard/dashboard.component.ts

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  
  constructor(private userService: UserService, private authService: AuthService, private taskService: TaskService, private router: Router){ }

  user = this.authService.getCurrentUser();
  tasks = this.taskService.getTasks();
  selectedTask;

  ngOnInit() {
    console.log("Tasks : ");console.log(this.tasks);
  }

  onSelect(task): void {
    this.selectedTask = task;
  }

  goToUpdateTask(){
    this.router.navigate(['/update-task']);
  }

  logOut(){
    this.authService.logout();
    console.log("utilisateur déconnecté");
  }

}