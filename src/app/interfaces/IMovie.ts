import {IGenre} from "./IGenre";

export interface IMovie{
  adult: boolean;
  backdrop_path: string;
  genre_ids: IGenre[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: string;
  vote_count: number;
}
