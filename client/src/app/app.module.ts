import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import {Http, Headers} from '@angular/http';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import {CandidatesService} from './shared/candidates.service';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CandidatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
