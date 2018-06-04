import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Priorite } from '../beans/priorite';
import { getValues } from '@firebase/util';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PriorityService {
  objectKeys = Object.keys;

  prioritiesRef: AngularFireList<any>;
  public priorities: Observable<any[]>;
  constructor(db: AngularFireDatabase, private router: Router) {
    this.prioritiesRef = db.list('Priorite');

    this.priorities = this.prioritiesRef.valueChanges();
  }

  PrioritiesMocker = [new Priorite({ id_priorite: "1", valeur: "10" }), new Priorite({ id_priorite: "2", valeur: "20" })
  ];

  getPriorities() {
    //return this.PrioritiesMocker;
    return this.priorities;
  }

  //à tester
  addPriority(newName: string) {
    this.prioritiesRef.push({ text: newName });
  }
  updatePriority(key: string, newText: string) {
    this.prioritiesRef.update(key, { text: newText });
  }
  deletePriority(key: string) {    
    this.prioritiesRef.remove(key); 
  }
  deleteEverything() {
    this.prioritiesRef.remove();
  }

}
