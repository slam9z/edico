import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/models/users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService, private router: Router) {
  }


    signInWithEmail() {

      this.authService.signup(this.user)
        .then((res) => {
          // console.log(res);
          this.router.navigate(['dashboard']);
        })
        .catch((err) => console.log('error: ' + err));
    }



  ngOnInit() {
  }

}
