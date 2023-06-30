import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovielistComponent } from './components/movie/movielist/movielist.component';
import { MovieaddComponent } from './components/movie/movieadd/movieadd.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviedetailComponent } from './components/movie/moviedetail/moviedetail.component';
import { MovieupdateComponent } from './components/movie/movieupdate/movieupdate.component';
import { MoviehomeComponent } from './components/movie/moviehome/moviehome.component';
import { CustomerhomeComponent } from './components/customer/customerhome/customerhome.component';
import { CustomerloginComponent } from './components/customer/customerlogin/customerlogin.component';
import { CustomerregisterComponent } from './components/customer/customerregister/customerregister.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovielistComponent,
    MovieaddComponent,
    MoviedetailComponent,
    MovieupdateComponent,
    MoviehomeComponent,
    CustomerhomeComponent,
    CustomerloginComponent,
    CustomerregisterComponent,
    NotfoundComponent
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
