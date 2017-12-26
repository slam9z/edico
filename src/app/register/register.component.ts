import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import { User } from '../shared/models/index';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  private message: any;
  private msgType: any;
  private user: User;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.createForm();
   }

  ngOnInit() {

  }
  createForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ]]
    });

  }


  get email() { return this.registerForm.get('email'); }

  get password() { return this.registerForm.get('password'); }

  public onFormSubmit() {
    if (this.registerForm.valid) {
      this.user = this.registerForm.value;
      console.log(this.user);
      /* Any API call logic via services goes here */
      this.authService.signup(this.user)
        .then((res) => {
          console.log('Success:', res);
          this.msgType = 'success';
          this.message = 'We would like to thank you for your attention to our project.  Please 0x01760d015473a4fd33466f00f9a9440537656fd';

          //this.router.navigate(['dashboard']);
        })
        .catch((err) => {
          this.msgType = 'error';
          this.message = err;
          console.log('error: ' + err);
        });

    }


  }

}
