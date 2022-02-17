import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { ThirdComponent } from './third/third.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ThirdComponent],
  imports: [
    CommonModule,
    LazyRoutingModule,
    ReactiveFormsModule
  ]
})
export class LazyModule { }
