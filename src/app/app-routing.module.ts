import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovielistComponent } from './components/movie/movielist/movielist.component';
import { MovieaddComponent } from './components/movie/movieadd/movieadd.component';
import { MoviedetailComponent } from './components/movie/moviedetail/moviedetail.component';
import { MovieupdateComponent } from './components/movie/movieupdate/movieupdate.component';
import { HomeComponent } from './components/home/home.component';
import { MoviehomeComponent } from './components/movie/moviehome/moviehome.component';
import { CustomerhomeComponent } from './components/customer/customerhome/customerhome.component';
import { CustomerloginComponent } from './components/customer/customerlogin/customerlogin.component';
import { CustomerregisterComponent } from './components/customer/customerregister/customerregister.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authenticationGuard } from './handlers/permission.functions';

const routes: Routes = [
  { path : '', component : HomeComponent, children :[
    { path : 'movie', component : MoviehomeComponent, children :[
      { path : 'list' , component : MovielistComponent},
      { path : 'add', canActivate: [authenticationGuard], component : MovieaddComponent},
      { path : 'detail/:id', component : MoviedetailComponent},
      { path : 'update/:id', canActivate: [authenticationGuard], component : MovieupdateComponent},
    ]},
    {
      path : 'customer', component : CustomerhomeComponent, children :[
        {path : 'login', component : CustomerloginComponent},
        {path : 'register', component : CustomerregisterComponent},
      ]
    }
  ]},
  {path : '**', component : NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
