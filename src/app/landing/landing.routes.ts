import {Routes} from '@angular/router';
import {LandingComponent} from './landing.component';
import {HomeComponent} from './home/home.component';

export const LANDING_ROUTES: Routes = [
  {
    path: '', component: LandingComponent, children: [
      {path: '', component: HomeComponent}
    ]
}];
