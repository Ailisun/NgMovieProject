import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGenreInfo, IMovieInf} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getMovies(page:number = 1): Observable<IMovieInf>{
    return this.httpClient.get<IMovieInf>(urls.movies, {params: {page}})
  }

  getMoviesById(id:number): Observable <IGenreInfo>{
    return  this.httpClient.get<IGenreInfo>(`${urls.movie}/${id}`)
  }

}
