import { InfoPageComponent } from './info-page/info-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component'

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'kontakt', component: ContactPageComponent},
  { path: 'info', component: InfoPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing: true,
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
