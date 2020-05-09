import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClient,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
