import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Disponibilite } from '../beans/disponibilite';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DisponibilityService {

  disponibilities: Observable<any[]>;
  days: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "friday"];
  constructor(private authService: AuthService, private _db: AngularFireDatabase, private router: Router) {
    this.disponibilities = this._db.list("users/" + this.authService.getCurrentUserUid() + "/disponibilities").valueChanges();
  }

  getDisponibilities() {
    return this.disponibilities;
  }

  writeDisponibilityData(disponibility: Disponibilite) {
    var user = this._db.list('users/' + this.authService.getCurrentUserUid() + '/disponibilities');
    console.log(disponibility);
    return user.push(disponibility).then((res) => { console.log(res.key); });
  }

  writeNodeDisponibilities(uid) {
    var user = this._db.object('users/' + uid);
    var out: object;

    for (let day in this.days) {
      out = {
        day: {
          heureDebutDispo: "init",
          heureDebutPause: "init",
          heureFinPause: "init",
          heureFinDispo: "init",
        }
      }
    }



    return user.set({
      disponibilities: {
        monday: "init",
        tuesday: "init",
      }
    }).then((res) => { console.log("noeud task écrit pour " + uid); });
  }
}
