import { tmdbGet } from '.'
import { Language } from './language'
import { LatestMovie, mockLatestMovie } from './movie/latest'
import { MoviesNowPlaying, mockMoviesNowPlaying } from './movie/now_playing'
import { PopularMovies, mockPopularMovies } from './movie/popular'
import { TopRatedMovies, mockTopRatedMovies } from './movie/top_rated'
import { UpcomingMovies, mockUpcomingMovies } from './movie/upcoming'
import { Region } from './region'

export default {
  /**
   * Get the most newly created movie. This is a live response and will
   * continuously change.
   *
   * @link https://developers.themoviedb.org/3/movies/get-latest-movie
   */
  getLatest: async (params: { language?: Language } = {}) => {
    return await tmdbGet<LatestMovie>(
      `/movie/latest`,
      { params },
      mockLatestMovie
    )
  },

  /**
   * Get a list of movies in theatres. This is a release type query that
   * looks for all movies that have a release type of 2 or 3 within the
   * specified date range.
   *
   * @link https://developers.themoviedb.org/3/movies/get-now-playing
   */
  getNowPlaying: async (
    params: { language?: Language; page?: number; region?: Region } = {}
  ) => {
    return await tmdbGet<MoviesNowPlaying>(
      `/movie/now_playing`,
      { params },
      mockMoviesNowPlaying
    )
  },

  /**
   * Get a list of the current popular movies on TMDB.
   *
   * @link https://developers.themoviedb.org/3/movies/get-popular-movies
   */
  getPopular: async (
    params: { language?: Language; page?: number; region?: Region } = {}
  ) => {
    return await tmdbGet<PopularMovies>(
      `/movie/popular`,
      { params },
      mockPopularMovies
    )
  },

  /**
   * Get the top rated movies on TMDB.
   *
   * @link https://developers.themoviedb.org/3/movies/get-top-rated-movies
   */
  getTopRated: async (
    params: { language?: Language; page?: number; region?: Region } = {}
  ) => {
    return await tmdbGet<TopRatedMovies>(
      `/movie/top_rated`,
      { params },
      mockTopRatedMovies
    )
  },

  /**
   * Get a list of upcoming movies in theatres. This is a release type query
   * that looks for all movies that have a release type of 2 or 3 within the
   * specified date range.
   *
   * @link https://developers.themoviedb.org/3/movies/get-upcoming
   */
  getUpcoming: async (
    params: { language?: Language; page?: number; region?: Region } = {}
  ) => {
    return await tmdbGet<UpcomingMovies>(
      `/movie/upcoming`,
      { params },
      mockUpcomingMovies
    )
  }
}
