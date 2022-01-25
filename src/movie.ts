import { Api } from "./api"
import { Language } from "./configuration/languages"
import { MovieCredits, mockMovieCredits } from "./movie/{movie_id}/credits"
import { MovieDetails, mockMovieDetails } from "./movie/{movie_id}/details"
import { MovieImages, mockMovieImages } from "./movie/{movie_id}/images"
import { MovieKeywords, mockMovieKeywords } from "./movie/{movie_id}/keywords"
import { MovieLists, mockMovieLists } from "./movie/{movie_id}/lists"
import {
  MovieRecommendations,
  mockMovieRecommendations,
} from "./movie/{movie_id}/recommendations"

export {
  MovieCredits,
  MovieDetails,
  MovieImages,
  MovieKeywords,
  MovieLists,
  MovieRecommendations,
}

export default class Movie extends Api {
  /**
   * Get the primary information about a movie.
   *
   * @link https://developers.themoviedb.org/3/movies/get-movie-credits
   */
  async getDetails(movieId: number, params: { language?: Language } = {}) {
    return await this.get<MovieDetails>(
      `/movie/${movieId}`,
      { params },
      mockMovieDetails,
    )
  }

  async getAccountState() {}
  async getAlternativeTitles() {}
  async getChanges() {}

  /**
   * Get the cast and crew for a movie.
   *
   * @link https://developers.themoviedb.org/3/movies/get-movie-images
   */
  async getCredits(movieId: number, params: { language?: Language } = {}) {
    return await this.get<MovieCredits>(
      `/movie/${movieId}/credits`,
      { params },
      mockMovieCredits,
    )
  }

  async getExternalIds() {}

  /**
   * Get the images that belong to a movie.
   *
   * @link https://developers.themoviedb.org/3/movies/get-movie-credits
   */
  async getImages(
    movieId: number,
    params: { language?: Language; include_image_language?: string } = {},
  ) {
    return await this.get<MovieImages>(
      `/movie/${movieId}/images`,
      { params },
      mockMovieImages,
    )
  }

  /**
   * Get the keywords that have been added to a movie.
   *
   * @link https://developers.themoviedb.org/3/movies/get-movie-keywords
   */
  async getKeywords(movieId: number) {
    return await this.get<MovieKeywords>(
      `/movie/${movieId}/keywords`,
      {},
      mockMovieKeywords,
    )
  }

  /**
   * Get a list of lists that this movie belongs to.
   *
   * @link https://developers.themoviedb.org/3/movies/get-movie-lists
   */
  async getLists(
    movieId: number,
    params: { language?: Language; page?: number } = {},
  ) {
    return await this.get<MovieLists>(
      `/movie/${movieId}/lists`,
      { params },
      mockMovieLists,
    )
  }

  /**
   * Get a list of recommended movies for a movie.
   *
   * @link https://developers.themoviedb.org/3/movies/get-movie-recommendations
   */
  async getRecommendations(
    movieId: number,
    params: { language?: Language; page?: number } = {},
  ) {
    return await this.get<MovieRecommendations>(
      `/movie/${movieId}/recommendations`,
      { params },
      mockMovieRecommendations,
    )
  }

  async getReleaseDates() {}
  async getReview() {}
  async getSimilarMovies() {}
  async getTranslations() {}
  async getVideos() {}
  async getWatchProviders() {}
  async rateMovie() {}
  async deleteRating() {}
}
