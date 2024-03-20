import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Assignment1Page } from './assignment1-page';

import { Assignment1RoutingModule } from './assignment1-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Assignment1RoutingModule
  ],
  declarations: [Assignment1Page]
})
export class Assignment1Module {}
