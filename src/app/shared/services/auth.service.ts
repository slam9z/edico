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
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) {
    this.user = firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
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
        console.log('user: ', itemObservable);
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
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }


  logout() {
    // this.firebaseAuth.auth.signOut()
    //   .then((res) => this.router.navigate(['/']));
  }

}

