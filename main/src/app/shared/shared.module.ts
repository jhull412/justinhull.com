import {MenuBarComponent} from "./menu-bar/menu-bar.component";
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './material/material.module';
import {HomeComponent} from "../landing/home/home.component";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [MenuBarComponent],
  entryComponents: [],
  exports: [
    FormsModule,
    MaterialModule,
    MenuBarComponent
  ]
})
export class SharedModule {
}
