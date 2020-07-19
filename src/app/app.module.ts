import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
    Title,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
