import { Component, OnInit, Http } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService, DefaultLangChangeEvent } from '@ngx-translate/core';

import{ Observable } from 'rxjs/Observable';
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

  private lang_in_use: any;
  private url_link = '/assets/whitepaper/etherdeltaenglish.pdf';
  constructor(private router: Router, private translate: TranslateService) {
    if (this.translate.getDefaultLang === undefined) {
      this.translate.setDefaultLang('en');
    }
  }

  switchLanguageEn() {
    this.translate.use('en');

  }

  switchLanguageCn() {
    this.translate.use('cn');

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

  $.ajax({
    url: "http://ip-api.com/json",
    type: 'GET',
    success: function(json)
    {
       console.log("My country is: " + json.country);
       if(json.country == "United States") {
          alert("We detect your IP belongs to US citizen or resident, whose legislation conflicts with joining the current sales event. We apologize for the inconvenience ");
       } else {
          this.router.navigate(['register']);
       }
    },
    error: function(err)
    {
      console.log("Request failed, error= " + err);
    }
  });


}

gotoExchange() {
   window.open(
     'https://etherdelta.com/',
     '_blank' // <- This is what makes it open in a new window.
   );
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

}
