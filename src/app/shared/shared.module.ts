import {NgModule} from '@angular/core';
import {MaterialModule} from './material/material.module';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
  ],
  declarations: [],
  entryComponents: [],
  exports: [
    MaterialModule
  ]
})
export class SharedModule {
}
