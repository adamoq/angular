import { Component } from '@angular/core';
import {rotateCarouselToTop} from "ngx-router-animations";
import {trigger, transition, useAnimation} from "@angular/animations";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('rotateCubeToLeft', [ transition('* => *', useAnimation(rotateCarouselToTop))])
  ]
})
export class AppComponent {
  title = 'angular-project';
  prepareRoute(outlet){
    return outlet.activatedRouteData
  }

}
