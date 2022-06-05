import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./components/main-layout/main-layout.component";
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {CommonModule} from "@angular/common";
import {GenreComponent} from "./components/genre/genre.component";

const routes: Routes = [{
  path:'', component:MainLayoutComponent, children:[
    {path:'', redirectTo: 'movie', pathMatch:'full'},
    {path:'movie',component:MovieListComponent, children:[
        {path:'genres', component:GenreComponent}
      ]},
    {path: 'movie/:id', component: MovieDetailsComponent},
  ]
}];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
