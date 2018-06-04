import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { tache } from '../beans/tache';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private user: Observable<firebase.User>;

  constructor(private _firebaseAuth: AngularFireAuth, private _db: AngularFireDatabase, private router: Router) {
    this.user = _firebaseAuth.authState;
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
