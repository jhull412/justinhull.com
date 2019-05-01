import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LANDING_ROUTES} from './landing/landing.routes';

const routes: Routes = [
  {path: '', children: LANDING_ROUTES},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
