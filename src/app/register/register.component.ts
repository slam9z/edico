import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import { User } from '../shared/models/index';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  message: any;
  msgType: any;
  private user: User;
  contractAddress: string;
  showEDT: boolean;

  isCopied = false;
  display = 'none';
  constructor(private fb: FormBuilder, private authService: AuthService,
              private translate: TranslateService,
              private modalService: NgbModal) {
    this.createForm();
    this.contractAddress = '0x01760d015473A4Fd33466F00f9A94405376565FD';
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
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
      ]],
      agreement: ['', Validators.required],

    });

  }


  get email() { return this.registerForm.get('email'); }

  get password() { return this.registerForm.get('password'); }

  get agreement() { return this.registerForm.get('agreement'); }


  public onFormSubmit() {
    if (this.registerForm.valid) {
      this.user = this.registerForm.value;
      console.log(this.user);
      /* Any API call logic via services goes here */
      this.authService.signup(this.user)
        .then((res) => {
          // console.log('Success:', res);
          this.msgType = 'success';
          this.showEDT = true;
          this.message = 'Ether Delta would like to thank you for your attention to our project. Our Contract Address as following:';

        })
        .catch((err) => {
          this.msgType = 'danger';
          this.message = err;
          this.showEDT = false;
          console.log('error: ' + err);
        });

    }


  }
}
