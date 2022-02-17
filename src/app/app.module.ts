import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MockService } from './mock.service';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { HoverDirective } from './util/hover.directive';



@NgModule({
  declarations: [AppComponent, FirstComponent, PageNotFoundComponent, HoverDirective],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [MockService],
  bootstrap: [AppComponent],
})
export class AppModule {}
