import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable'; 
import { UserService } from './user.service'; 

@Injectable()
export class AuthService {

  constructor(private _firebaseAuth: AngularFireAuth, private _db: AngularFireDatabase, private _user: UserService, private router: Router) {
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

  getAuthObject(){
    return this._firebaseAuth.auth;
  }
  
}

