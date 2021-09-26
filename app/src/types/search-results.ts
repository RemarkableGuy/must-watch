import Actor from "./actor";
import Critic from "./critic";
import Franchise from "./franchise";
import Movie from "./movie";
import TvSeries from "./tv-series";

export default interface Results {
  actors: Actor[];
  critics: Critic[];
  franchises: Franchise[];
  movies: Movie[];
  tvSeries: TvSeries[];
  actorCount: number;
  criticCount: number;
  franchiseCount: number;
  movieCount: number;
  tvCount: number;
}
