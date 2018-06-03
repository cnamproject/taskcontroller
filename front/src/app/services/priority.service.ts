import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Priorite } from '../beans/priorite';
import { getValues } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class PriorityService {
  objectKeys = Object.keys;

  public priorities: AngularFireList<Priorite[]>;
  constructor(db: AngularFireDatabase, private router: Router) {
    this.priorities = db.list('/Priorite');
  }

  PrioritiesMocker = [new Priorite({ id_priorite: "1", valeur: "10" }), new Priorite({ id_priorite: "2", valeur: "20" })
  ];

  getPriorities() {
    //console.log("priority service :");
    //console.log(this.PrioritiesMocker);
    //return this.PrioritiesMocker;
    console.log(this.priorities);
    return this.priorities;
  }

}
