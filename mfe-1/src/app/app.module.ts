import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';

@NgModule({
  declarations: [
    AppComponent,
    LoremIpsumComponent
  ],
  imports: [
    //BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
