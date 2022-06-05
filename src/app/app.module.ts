import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GenreComponent } from './components/genre/genre.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import {AppInterceptor} from "./app.interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    HeaderComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    MovieListComponent,
    PaginationComponent,
    MainLayoutComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AppInterceptor
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
