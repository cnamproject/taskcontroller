import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { tache } from '../beans/tache';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Observable<any[]>;
  constructor(private authService: AuthService, private _db: AngularFireDatabase, private router: Router) {
      this.tasks = this._db.list("users/" + this.authService.getCurrentUserUid() + "/tasks").valueChanges();
   }

   getTasks(){
      return this.tasks;
   }

   writeTaskData(uid, task : tache){
     var user = this._db.list('users/'+ uid +'/tasks');
     console.log(task);
    return user.push(task).then((res) => { console.log(res.key); });
  }

  writeNodeTasks(uid){
    var user = this._db.object('users/'+ uid);
    return user.set({tasks:"init"}).then((res) => { console.log("noeud task écrit pour " + uid); });
  }
   
}
