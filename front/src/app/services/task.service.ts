import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { tache } from '../beans/tache';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasksRef: AngularFireList<any>;
  public tasks: Observable<any[]>;

  constructor(private authService: AuthService, private _db: AngularFireDatabase, private router: Router) {
    this.tasksRef = this._db.list(this.authService.getCurrentUserUid() + '/tasks');
    this.tasks = this.tasksRef.valueChanges();
   }

   getTasks(){
      return this.tasks;
   }

   writeTaskData(uid, task : tache){
     var user = this._db.list('users/'+ uid +'/tasks');
     console.log(task);
    return user.push(task).then((res) => { console.log(res.key); });
  }

  writeNodeTask(uid){
    var user = this._db.object('users/'+ uid);
    return user.set({tasks:"init"}).then((res) => { console.log("noeud task écrit pour " + uid); });
  }
   
}
