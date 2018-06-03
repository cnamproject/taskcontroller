import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private user: Observable<firebase.User>;
  private task: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private _db: AngularFireDatabase, private router: Router) {
    this.user = _firebaseAuth.authState;
    this.task = _firebaseAuth.auth.currentUser;
   }

   writeTaskData(uid, tache){
    return this._db.object('users/'+ uid).set({tasks: "tasks"});
  }
   
}
