import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private translate: TranslateService) {

  }

  ngOnInit() {
  }
  switchLanguage(language: string) {
    console.log('onDefaultLangChange ', this.translate.getLangs);
    console.log(language);
    this.translate.use(language);
  }
}
