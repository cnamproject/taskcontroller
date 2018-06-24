import { Component, Input } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';

import { AuthService } from '../app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  private authobj = this.authService.getAuthObject();
  
  private user = null;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private authService : AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.authobj.onAuthStateChanged((user) => {
      if (user) {
        if(!user.uid){
          this.user = null;
        }else{
          this.user = user;
          console.log('logged in', user);
        
        }
      } else {
      this.user = null;
      console.log('not logged in');
    }
  });
  }
  

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  recss(){
    console.log(this.user);
    let shand = document.getElementsByClassName('sidenav-content') as HTMLCollectionOf<HTMLElement>;

if (shand.length != 0) {
  shand[0].setAttribute("style", "margin-left : 100px; left : 150px;");
}
  }

  logOut(){
    this.authService.logout();
    console.log("utilisateur déconnecté");
  }
}


