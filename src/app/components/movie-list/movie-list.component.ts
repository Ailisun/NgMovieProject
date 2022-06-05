import { Component, OnInit } from '@angular/core';
import {IMovie} from "../../interfaces";
import {MovieService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: IMovie[]
  page:number
  constructor(private movieService: MovieService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // this.movieService.getMovies().subscribe(value => this.movies = value.results)

    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.movieService.getMovies(page || 1).subscribe(value => {
        this.movies = value.results
      })
    })
  }

}
