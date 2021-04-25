import { Component } from '@angular/core';
import { rotateCarouselToTop } from "ngx-router-animations";
import { trigger, transition, useAnimation } from "@angular/animations";
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from "rxjs/operators";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('rotateCubeToLeft', [transition('* => *', useAnimation(rotateCarouselToTop))])
  ]
})
export class AppComponent {
  title = 'Madami Group';
  param = { value: 'world' };

  constructor(private translate: TranslateService, private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
    let availableLangs = ['en', 'pl'];
    translate.addLangs(availableLangs);
    // this language will be used as a fallback when a translation isn't found in the current language
    var userLang = navigator.language.slice(0, 2);
    userLang = availableLangs.includes(userLang) ? userLang : 'en';
    translate.setDefaultLang(userLang);
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(userLang);
    let self = this;
    //title links
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        while (child) {
          if (child.firstChild) {
            child = child.firstChild;
          } else if (child.snapshot.data && child.snapshot.data['title']) {
            return child.snapshot.data['title'];
          } else {
            return null;
          }
        }
        return null;
      })
    ).subscribe((data: any) => {
      if (data) {
        this.title = data;
        this.setPageTitle();
      }
    });
  }


  prepareRoute(outlet) {
    return outlet.activatedRouteData;
  }
  hideMenu(): void {
    (document.getElementById("hamburger") as HTMLInputElement).checked = false;
  }
  setLanguage(languageCode): void {
    this.translate.use(languageCode);
    this.setPageTitle();
    this.hideMenu();
  }
  setPageTitle(): void {
    this.translate.get(this.title).subscribe((translatedTitle: string) => {
      this.titleService.setTitle(translatedTitle + ' | Madami Group');
    });
  }

}

