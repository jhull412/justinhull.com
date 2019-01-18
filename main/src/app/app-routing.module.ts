import {RouterModule, Routes} from '@angular/router';
import {LANDING_ROUTES} from './landing/landing.routes';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'landing'},
  {path: 'landing', children: LANDING_ROUTES},
  {path: '**', pathMatch: 'full', redirectTo: 'landing'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
