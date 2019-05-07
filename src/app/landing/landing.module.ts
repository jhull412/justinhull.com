import {LandingComponent} from './landing.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { HomeComponent } from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class LandingModule {
}
