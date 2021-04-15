import { LogisticsPageComponent } from './logistics-page/logistics-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component'

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'info', component: InfoPageComponent},
  { path: 'logistics', component: LogisticsPageComponent}
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled'
  // ...any other options you'd like to use
};
@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
