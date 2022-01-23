import { tmdbGet } from ".";
import { Language } from "./configuration/languages";
import { MovieDetails, mockMovieDetails } from "./movie/{movie_id}";
import { MovieCredits, mockMovieCredits } from "./movie/{movie_id}/credits";
import { MovieImages, mockMovieImages } from "./movie/{movie_id}/images";
import { MovieKeywords, mockMovieKeywords } from "./movie/{movie_id}/keywords";
import { MovieLists, mockMovieLists } from "./movie/{movie_id}/lists";
import {
  MovieRecommendations,
  mockMovieRecommendations,
} from "./movie/{movie_id}/recommendations";

export default {
  /**
   * Get the primary information about a movie.
   *
   * @link https://developers.themoviedb.org/3/movies/get-movie-credits
   */
  getDetails: async (movieId: string, params: { language?: Language } = {}) => {
    return await tmdbGet<MovieDetails>(
      `/movie/${movieId}`,
      { params },
      mockMovieDetails
    );
  },

  getAccountState: async () => {},
  getAlternativeTitles: async () => {},
  getChanges: async () => {},

  /**
   * Get the cast and crew for a movie.
   *
   * @link https://developers.themoviedb.org/3/movies/get-movie-images
   */
  getCredits: async (movieId: string, params: { language?: Language } = {}) => {
    return await tmdbGet<MovieCredits>(
      `/movie/${movieId}/credits`,
      { params },
      mockMovieCredits
    );
  },

  getExternalIds: async () => {},

  /**
   * Get the images that belong to a movie.
   *
   * @link https://developers.themoviedb.org/3/movies/get-movie-credits
   */
  getImages: async (
    movieId: string,
    params: { language?: Language; include_image_language?: string } = {}
  ) => {
    return await tmdbGet<MovieImages>(
      `/movie/${movieId}/images`,
      { params },
      mockMovieImages
    );
  },

  /**
   * Get the keywords that have been added to a movie.
   *
   * @link https://developers.themoviedb.org/3/movies/get-movie-keywords
   */
  getKeywords: async (movieId: string) => {
    return await tmdbGet<MovieKeywords>(
      `/movie/${movieId}/keywords`,
      {},
      mockMovieKeywords
    );
  },

  /**
   * Get a list of lists that this movie belongs to.
   *
   * @link https://developers.themoviedb.org/3/movies/get-movie-lists
   */
  getLists: async (
    movieId: string,
    params: { language?: Language; page?: number } = {}
  ) => {
    return await tmdbGet<MovieLists>(
      `/movie/${movieId}/lists`,
      { params },
      mockMovieLists
    );
  },

  /**
   * Get a list of recommended movies for a movie.
   *
   * @link https://developers.themoviedb.org/3/movies/get-movie-recommendations
   */
  getRecommendations: async (
    movieId: string,
    params: { language?: Language; page?: number } = {}
  ) => {
    return await tmdbGet<MovieRecommendations>(
      `/movie/${movieId}/recommendations`,
      { params },
      mockMovieRecommendations
    );
  },

  getReleaseDates: async () => {},
  getReview: async () => {},
  getSimilarMovies: async () => {},
  getTranslations: async () => {},
  getVideos: async () => {},
  getWatchProviders: async () => {},
  rateMovie: async () => {},
  deleteRating: async () => {},
};
