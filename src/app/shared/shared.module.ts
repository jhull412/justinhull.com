import {NgModule} from '@angular/core';
import {MaterialModule} from './material/material.module';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
  ],
  declarations: [NavigationBarComponent],
  entryComponents: [],
  exports: [
    MaterialModule,
    NavigationBarComponent
  ]
})
export class SharedModule {
}
