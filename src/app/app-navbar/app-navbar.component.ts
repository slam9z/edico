import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService, DefaultLangChangeEvent } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;

  constructor(private router: Router, private translate: TranslateService) {

  }

  switchLanguage(language: string) {
    this.translate.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => {

    });
    this.translate.use(language);
  }

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 50,
          densuity: {
            enable: false,
            value_area: 100
          }
        },
        color: {
          value: '#fff'
        },
        shape: {
          type: 'circle',

        },
      }
    };
  }

gotoRegister() {
  this.router.navigate(['register']);
}

gotoExchange() {
   window.open(
     'https://etherdelta.com/',
     '_blank' // <- This is what makes it open in a new window.
   );
}

downloadWP() {
   window.open(
     '/assets/whitepaper/EtherDeltaEnglish.pdf',
     '_blank' // <- This is what makes it open in a new window.
   );
}

}
