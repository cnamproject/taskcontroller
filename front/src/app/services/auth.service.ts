import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable'; 

@Injectable()
export class AuthService {

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
  }

  signInRegular(email, password) {
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
  }

  registerRegular(email, password){
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }

  isLoggedIn(){
    if(this._firebaseAuth.auth.currentUser){
      return true;
    } else {
      return false;
    }
  }

  //Getter AUTH SERVICE OBJECTS
  getAuthObject(){
    return this._firebaseAuth.auth;
  }

  getCurrentUser(){
    return this._firebaseAuth.auth.currentUser;
  }

  getCurrentUserUid(){
    return this._firebaseAuth.auth.currentUser.uid;
  }
}

