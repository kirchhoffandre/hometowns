import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { first, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private zone: NgZone
  ) { }


  signIn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).
      then (() => {
        this.zone.run(() => this.router.navigateByUrl('/hometown'));
      }, err => console.error('Error signin in', err));
  }

  isLoggedIn(withRedirect?: boolean): Observable<boolean> {
    return this.afAuth.authState.pipe(
      first(), // allow any subscriptions to be auto unsubscribed
      map(user => {
        // assign the current user while we're here.
        this.currentUser = user;
        return !!user;
      }),
      tap(isLoggedIn => {
        // this tap is so we can redirect if logged out
        if (!isLoggedIn && withRedirect) {
          this.router.navigateByUrl('/login');
        }
      })
    );
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
