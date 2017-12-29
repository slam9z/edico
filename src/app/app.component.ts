import { Component } from '@angular/core';
import { TranslateService, DefaultLangChangeEvent } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EtherDelta ICO';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => {
      console.log('onDefaultLangChange ', this.translate.getLangs);
    });
    this.translate.use(language);
  }
}
