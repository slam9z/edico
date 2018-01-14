import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService, DefaultLangChangeEvent } from '@ngx-translate/core';
import { AuthService } from '../shared/services/index';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/models/users';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  authorized = false;
  display = 'none';

  authServ: AuthService;
  private lang_in_use: any;
  private url_link = '/assets/whitepaper/etherdeltaenglish.pdf';
  isShow = (Date.now() <= environment.crowdsaleEnd);


  constructor(private router: Router, private translate: TranslateService, private auth: AuthService, private http: Http) {
    if (this.translate.getDefaultLang === undefined) {
      this.translate.setDefaultLang('en');
    }

  }

  ngOnInit() {


  }

  switchLanguageEn() {
    this.translate.use('en');

  }

  switchLanguageCn() {
    this.translate.use('cn');

  }

  gotoExchange() {
    window.open(
      'https://etherdelta.com/',
      '_blank' // <- This is what makes it open in a new window.
    );
  }

  gotoRegister() {
    this.http.get('https://ipapi.co/json/')
      .map(response => response.json())
      .subscribe(data => {
        const country = data['country'];
        if (environment.blockCountry.includes(country)) {
          alert('We detect your IP belongs to US citizen or resident, ' +
            'whose legislation conflicts with joining the current sales event. We apologize for the inconvenience.');
        } else {
          this.router.navigate(['register']);
        }

      });
  }
  downloadWP() {
    if (this.translate.currentLang  === 'cn') {
      this.url_link = '/assets/whitepaper/etherdeltasimchinese.pdf';
    }
    window.open(
      this.url_link ,
      '_blank' // <- This is what makes it open in a new window.
    );
  }

  login() {
    this.router.navigate(['sign-in']);
  }
  logout() {
    this.authServ.logout();
    this.router.navigate(['/']);
  }



}
