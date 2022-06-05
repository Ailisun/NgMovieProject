import { Component, OnInit } from '@angular/core';
import {IGenre} from "../../interfaces";
import {GenreService} from "../../services";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genres:IGenre[]
  constructor( private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.getGenres().subscribe(value => this.genres = value.genres)
  }

}
