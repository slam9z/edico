import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contractAddress: string;
  isCopied = false;

  constructor(private translate: TranslateService) {
    this.contractAddress = '0xCe53a179047ebed80261689367c093C90A94cC08';
  }

  ngOnInit() {
  }
  switchLanguage(language: string) {

    this.translate.use(language);
  }
}
