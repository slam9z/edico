import { Injectable } from '@angular/core';
import { User } from './../models/index';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { RegisterComponent } from '../../register/register.component';

@Injectable()
export class AuthService {
  user: Observable<firebase.User> | null;
  userDetails: firebase.User = null;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) {
    this.user = firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;

        } else {
          this.userDetails = null;
        }
      }
    );

  }

  signup(user: User) {
    const email = user.email;
    const password = user.password;
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password).then((newUser) => {
      if (newUser) {
        const itemObservable = this.db.object('/userProfile/' + newUser.uid);

        itemObservable.set({
          email: email,
          password: password,
          status: 'A',
          lastLoginDTTM: new Date().toLocaleString()
        });
      }
    });
  }

  login(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }


  getCurrentUser(): firebase.User {
    return this.firebaseAuth.auth.currentUser;
  }
  isLoggedIn() {

    if (!this.userDetails) {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    this.firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }
}



