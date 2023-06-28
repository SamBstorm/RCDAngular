import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { MovieaddComponent } from './components/movieadd/movieadd.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';
import { MovieupdateComponent } from './components/movieupdate/movieupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovielistComponent,
    MovieaddComponent,
    MoviedetailComponent,
    MovieupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
