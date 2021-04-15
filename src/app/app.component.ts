import { Component } from '@angular/core';
import { rotateCarouselToTop } from "ngx-router-animations";
import { trigger, transition, useAnimation } from "@angular/animations";
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('rotateCubeToLeft', [transition('* => *', useAnimation(rotateCarouselToTop))])
  ]
})
export class AppComponent {
  title = 'angular-project';
  param = { value: 'world' };

  constructor(private translate: TranslateService) {
    let availableLangs = ['en', 'pl'];
    translate.addLangs(availableLangs);
    // this language will be used as a fallback when a translation isn't found in the current language
    var userLang = navigator.language.slice(0, 2);
    userLang = availableLangs.includes(userLang) ? userLang : 'en';
    translate.setDefaultLang(userLang);
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(userLang);
  }


  prepareRoute(outlet) {
    return outlet.activatedRouteData
  }
  hideMenu(): void {
    (document.getElementById("hamburger") as HTMLInputElement).checked = false;
  }
  setLanguage(languageCode): void {
    this.translate.use(languageCode);
    this.hideMenu();
  }


}

