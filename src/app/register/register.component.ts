import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
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
  siteKey: string;
  isCopied = false;
  display = 'none';

  page = 1;

  totalPages: number;
  isLoaded= false;
  constructor(private fb: FormBuilder, private authService: AuthService,
              private translate: TranslateService,
              private modalService: NgbModal) {
    this.createForm();
    this.contractAddress = '0xCe53a179047ebed80261689367c093C90A94cC08';
    this.siteKey = '6LdEDz8UAAAAAIr8Oks0e29LIdzbU4KMnTYAb2-P';

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
      agreement0: ['', Validators.requiredTrue],
      agreement1: ['', Validators.requiredTrue],
      agreement2: ['', Validators.requiredTrue],
      agreement3: ['', Validators.requiredTrue]
      // recaptcha: [null, Validators.required]

    });

  }


  get email() { return this.registerForm.get('email'); }

  get password() { return this.registerForm.get('password'); }

  get agreement0() { return this.registerForm.get('agreement0'); }

  get agreement1() { return this.registerForm.get('agreement1'); }
  get agreement2() { return this.registerForm.get('agreement2'); }
  get agreement3() { return this.registerForm.get('agreement3'); }
  get recaptcha() { return this.registerForm.get('recaptcha'); }
  public onFormSubmit() {
    if (this.registerForm.valid) {
      this.user = this.registerForm.value;
      // console.log(this.user);
      /* Any API call logic via services goes here */
      this.authService.signup(this.user)
        .then((res) => {
          // console.log('Success:', res);
          this.msgType = 'success';
          this.showEDT = true;
          this.message = 'Ether Delta would like to thank you for your attention to our project. Contract Address:';
        })
        .catch((err) => {
          // this.msgType = 'danger';
          // this.message = err;
          // this.showEDT = false;
          this.msgType = 'success';
          this.showEDT = true;
          this.message = 'Ether Delta would like to thank you for your attention to our project. Contract Address:';

          // console.log('error: ' + err);
        });

    }
  }

  /**PDF Viewer**/


  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    console.log(pdfData.zoom);
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

}
