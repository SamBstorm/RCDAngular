import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovielistComponent } from './components/movielist/movielist.component';
import { MovieaddComponent } from './components/movieadd/movieadd.component';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';
import { MovieupdateComponent } from './components/movieupdate/movieupdate.component';

const routes: Routes = [
  { path : 'movie', component : MovielistComponent},
  { path : 'movieadd', component : MovieaddComponent},
  { path : 'moviedetail/:id', component : MoviedetailComponent},
  { path : 'movieupdate/:id', component : MovieupdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
