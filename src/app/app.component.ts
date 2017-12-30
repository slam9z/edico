import { Component, Output, EventEmitter } from '@angular/core';
import { TranslateService, DefaultLangChangeEvent } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EtherDelta ICO';
  @Output()
  inUseLang: EventEmitter<string> = new EventEmitter<string>();
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {

    this.translate.use(language);

  }
}
