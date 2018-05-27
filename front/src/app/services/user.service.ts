import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private _db: AngularFireDatabase, private router: Router) {
    this.user = _firebaseAuth.authState;
    this.userDetails = _firebaseAuth.auth.currentUser;
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  getUserDetails(){
      return this.userDetails;
  }

  getUserUid(){
      return this.userDetails.uid;
  }

  writeUserData(uid, name){
    return this._db.object('users/'+ uid).set({name: name});
  }

}
