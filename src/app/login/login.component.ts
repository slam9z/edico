import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/index';
import { User } from '../shared/models/users';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User;
  siteKey: string;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.createForm();
    this.siteKey = '6LdEDz8UAAAAAIr8Oks0e29LIdzbU4KMnTYAb2-P';
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
      // recaptcha: [null, Validators.required]

    });

  }

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }

  signInWithEmail() {
    this.user = this.loginForm.value;
    this.authService.login(this.user.email, this.user.password).then((res) => {
      // console.log('sucess');
      // console.log('user found');
      this.router.navigate(['/']);
    }).catch((err) => {
      // console.log(err);
      this.loginForm.controls['password'].reset();
      this.loginForm.setErrors({ 'incorrect': true });
    });
    // if (this.authService.getCurrentUser) {
    //   console.log('user found');
    //   this.router.navigate(['/']);
    // } else {
    //   console.log('Invalid email/ password.');
    // }

  }



  ngOnInit() {
  }

}
