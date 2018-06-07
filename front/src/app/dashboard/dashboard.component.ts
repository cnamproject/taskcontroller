import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  
  constructor(private userService: UserService, private authService: AuthService, private taskService: TaskService){ }

  user = this.userService.getUserDetails();
  tasks = this.taskService.getTasks();

  ngOnInit() {
    console.log("Tasks : ");console.log(this.tasks);
  }

  logOut(){
    this.authService.logout();
    console.log("utilisateur déconnecté");
  }

}