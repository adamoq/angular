import { InfoPageComponent } from './info-page/info-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component'

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'kontakt', component: ContactPageComponent},
  { path: 'info', component: InfoPageComponent}
];
const routerOptions: ExtraOptions = {
  //useHash: false,
  scrollPositionRestoration: 'top'
  //anchorScrolling: 'enabled',
  // ...any other options you'd like to use
};
@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
