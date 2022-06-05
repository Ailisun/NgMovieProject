import {IMovie} from "./IMovie";

export interface IMovieInf{
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
