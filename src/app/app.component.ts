import { Component } from '@angular/core';
import {rotateCarouselToRight} from "ngx-router-animations";
import {trigger, transition, useAnimation} from "@angular/animations";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('rotateFlipToTop', [ transition('* => *', useAnimation(rotateCarouselToRight))])
  ]
})
export class AppComponent {
  title = 'angular-project';
  prepareRoute(outlet){
    return outlet.activatedRouteData
  }

}
