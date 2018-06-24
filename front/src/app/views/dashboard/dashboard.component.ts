import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { TaskService } from '../../services/task.service';

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