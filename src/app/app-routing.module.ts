import { DivisionsPageComponent } from './divisions-page/divisions-page.component';
import { LogisticsPageComponent } from './logistics-page/logistics-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component'

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      title: 'Dashboard'
    }
  },
  getRoute('contact', ContactPageComponent),
  getRoute('info', InfoPageComponent),
  getRoute('logistics', LogisticsPageComponent),
  getRoute('specializations', DivisionsPageComponent)
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled'
  // ...any other options you'd like to use
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { };

function getRoute(routeName: string, component: object): object {
  return { path: routeName, component: component,
    data: { title: routeName }
  };
}
