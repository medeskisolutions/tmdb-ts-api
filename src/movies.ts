import { Api, TmdbApiOptions } from "./api"
import { Country } from "./configuration/countries"
import { Language } from "./configuration/languages"
import { LatestMovie, mockLatestMovie } from "./movie/latest"
import { MoviesNowPlaying, mockMoviesNowPlaying } from "./movie/now_playing"
import { PopularMovies, mockPopularMovies } from "./movie/popular"
import { TopRatedMovies, mockTopRatedMovies } from "./movie/top_rated"
import { UpcomingMovies, mockUpcomingMovies } from "./movie/upcoming"

export default class Movies extends Api {
  /**
   * Get the most newly created movie. This is a live response and will
   * continuously change.
   *
   * @link https://developers.themoviedb.org/3/movies/get-latest-movie
   */
  async getLatest(params: { language?: Language } = {}) {
    return await this.get<LatestMovie>(
      `/movie/latest`,
      { params },
      mockLatestMovie,
    )
  }

  /**
   * Get a list of movies in theatres. This is a release type query that
   * looks for all movies that have a release type of 2 or 3 within the
   * specified date range.
   *
   * @link https://developers.themoviedb.org/3/movies/get-now-playing
   */
  async getNowPlaying(
    params: { language?: Language; page?: number; region?: Country } = {},
  ) {
    return await this.get<MoviesNowPlaying>(
      `/movie/now_playing`,
      { params },
      mockMoviesNowPlaying,
    )
  }

  /**
   * Get a list of the current popular movies on TMDB.
   *
   * @link https://developers.themoviedb.org/3/movies/get-popular-movies
   */
  async getPopular(
    params: { language?: Language; page?: number; region?: Country } = {},
  ) {
    return await this.get<PopularMovies>(
      `/movie/popular`,
      { params },
      mockPopularMovies,
    )
  }

  /**
   * Get the top rated movies on TMDB.
   *
   * @link https://developers.themoviedb.org/3/movies/get-top-rated-movies
   */
  async getTopRated(
    params: { language?: Language; page?: number; region?: Country } = {},
  ) {
    return await this.get<TopRatedMovies>(
      `/movie/top_rated`,
      { params },
      mockTopRatedMovies,
    )
  }

  /**
   * Get a list of upcoming movies in theatres. This is a release type query
   * that looks for all movies that have a release type of 2 or 3 within the
   * specified date range.
   *
   * @link https://developers.themoviedb.org/3/movies/get-upcoming
   */
  async getUpcoming(
    params: { language?: Language; page?: number; region?: Country } = {},
  ) {
    return await this.get<UpcomingMovies>(
      `/movie/upcoming`,
      { params },
      mockUpcomingMovies,
    )
  }
}
