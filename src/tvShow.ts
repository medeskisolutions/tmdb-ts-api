import { Api, TmdbApiOptions } from "./api"
import { Language } from "./configuration/languages"
import {
  TvShowAggregateCredits,
  mockTvShowAggregateCredits,
} from "./tv/{tv_id}/aggregate_credits"
import {
  TvShowAlternativeTitles,
  mockTvShowAlternativeTitles,
} from "./tv/{tv_id}/alternative_titles"
import {
  TvShowContentRatings,
  mockTvShowContentRatings,
} from "./tv/{tv_id}/content_ratings"
import { TvShowCredits, mockTvShowCredits } from "./tv/{tv_id}/credits"
import { TvShowDetails, mockTvShowDetails } from "./tv/{tv_id}/details"
import {
  TvShowEpisodeGroups,
  mockTvShowEpisodeGroups,
} from "./tv/{tv_id}/episode_groups"
import {
  TvShowExternalIds,
  mockTvShowExternalIds,
} from "./tv/{tv_id}/external_ids"
import { TvShowImages, mockTvShowImages } from "./tv/{tv_id}/images"
import { TvShowKeywords, mockTvShowKeywords } from "./tv/{tv_id}/keywords"
import {
  TvShowRecommendations,
  mockTvShowRecommendations,
} from "./tv/{tv_id}/recommendations"
import { TvShowReviews, mockTvShowReviews } from "./tv/{tv_id}/reviews"
import {
  TvShowScreenedTheatrically,
  mockTvShowScreenedTheatrically,
} from "./tv/{tv_id}/screened_theatrically"
import { SimilarTvShows, mockSimilarTvShows } from "./tv/{tv_id}/similar"
import {
  TvShowTranslations,
  mockTvShowTranslations,
} from "./tv/{tv_id}/translations"
import { TvShowVideos, mockTvShowVideos } from "./tv/{tv_id}/videos"
import TvShowSeason from "./tvShowSeason"

export {
  TvShowAggregateCredits,
  TvShowAlternativeTitles,
  TvShowContentRatings,
  TvShowDetails,
  TvShowEpisodeGroups,
  TvShowExternalIds,
  TvShowImages,
  TvShowKeywords,
  TvShowRecommendations,
  TvShowScreenedTheatrically,
  TvShowTranslations,
  TvShowVideos,
}

export default class TvShow extends Api {
  season: TvShowSeason

  constructor(options: TmdbApiOptions) {
    super(options)
    this.season = new TvShowSeason(options)
  }

  /**
   * Get the primary TV show details by id.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-details
   */
  async getDetails(tvShowId: string, params: { language?: Language } = {}) {
    // TODO add append to response values
    return await this.get<TvShowDetails>(
      `/tv/${tvShowId}`,
      { params },
      mockTvShowDetails,
    )
  }

  async getAccountStates() {}

  /**
   * Get the aggregate credits (cast and crew) that have been added to
   * a TV show.
   *
   * This call differs from the main credits call in that it does not return
   * the newest season but rather, is a view of all the entire cast & crew
   * for all episodes belonging to a TV show.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-aggregate-credits
   */
  async getAggregateCredits(
    tvShowId: string,
    params: { language?: Language } = {},
  ) {
    return await this.get<TvShowAggregateCredits>(
      `/tv/${tvShowId}/aggregate_credits`,
      { params },
      mockTvShowAggregateCredits,
    )
  }

  /**
   * Returns all of the alternative titles for a TV show.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-alternative-titles
   */
  async getAlternativeTitles(
    tvShowId: string,
    params: { language?: Language } = {},
  ) {
    return await this.get<TvShowAlternativeTitles>(
      `/tv/${tvShowId}/alternative_titles`,
      { params },
      mockTvShowAlternativeTitles,
    )
  }

  async getChanges() {}

  /**
   * Get the list of content ratings (certifications) that have been added to a TV show.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-content-ratings
   */
  async getContentRatings(
    tvShowId: string,
    params: { language?: Language } = {},
  ) {
    return await this.get<TvShowCredits>(
      `/tv/${tvShowId}/content_ratings`,
      { params },
      mockTvShowCredits,
    )
  }

  /**
   * Get the credits (cast and crew) that have been added to a TV show.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-credits
   */
  async getCredits(tvShowId: string, params: { language?: Language } = {}) {
    return await this.get<TvShowContentRatings>(
      `/tv/${tvShowId}/credits`,
      { params },
      mockTvShowContentRatings,
    )
  }

  /**
   * Get all of the episode groups that have been created for a TV show.
   *
   * With a group ID you can call the get TV episode group details method.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-episode-groups
   */
  async getEpisodeGroups(
    tvShowId: string,
    params: { language?: Language } = {},
  ) {
    return await this.get<TvShowEpisodeGroups>(
      `/tv/${tvShowId}/episode_groups`,
      { params },
      mockTvShowEpisodeGroups,
    )
  }

  /**
   * Get the external ids for a TV show.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-external-ids
   */
  async getExternalIds(tvShowId: string, params: { language?: Language } = {}) {
    return await this.get<TvShowExternalIds>(
      `/tv/${tvShowId}/external_ids`,
      { params },
      mockTvShowExternalIds,
    )
  }

  /**
   * Get the images that belong to a TV show.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-images
   */
  async getImages(tvShowId: string, params: { language?: Language } = {}) {
    return await this.get<TvShowImages>(
      `/tv/${tvShowId}/images`,
      { params },
      mockTvShowImages,
    )
  }

  /**
   * Get the keywords that have been added to a TV show.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-keywords
   */
  async getKeywords(tvShowId: string) {
    return await this.get<TvShowKeywords>(
      `/tv/${tvShowId}/images`,
      {},
      mockTvShowKeywords,
    )
  }

  /**
   * Get the list of TV show recommendations for this item.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-recommendations
   */
  async getRecommendations(
    tvShowId: string,
    params: { language?: Language; page?: number } = {},
  ) {
    return await this.get<TvShowRecommendations>(
      `/tv/${tvShowId}/recommendations`,
      { params },
      mockTvShowRecommendations,
    )
  }

  /**
   * Get the reviews for a TV show.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-reviews
   */
  async getReviews(
    tvShowId: string,
    params: { language?: Language; page?: number } = {},
  ) {
    return await this.get<TvShowReviews>(
      `/tv/${tvShowId}/reviews`,
      { params },
      mockTvShowReviews,
    )
  }

  /**
   * Get a list of seasons or episodes that have been screened in a film festival or theatre.
   *
   * @link https://developers.themoviedb.org/3/tv/get-screened-theatrically
   */
  async getScreenedTheatrically(tvShowId: string) {
    return await this.get<TvShowScreenedTheatrically>(
      `/tv/${tvShowId}/screened_theatrically`,
      {},
      mockTvShowScreenedTheatrically,
    )
  }

  /**
   * Get a list of similar TV shows. These items are assembled
   * by looking at keywords and genres.
   *
   * @link https://developers.themoviedb.org/3/tv/get-similar-tv-shows
   */
  async getSimilar(
    tvShowId: string,
    params: { language?: Language; page?: number } = {},
  ) {
    return await this.get<SimilarTvShows>(
      `/tv/${tvShowId}/similar`,
      { params },
      mockSimilarTvShows,
    )
  }

  /**
   * Get a list of the translations that exist for a TV show.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-translations
   */
  async getTranslations(tvShowId: string) {
    return await this.get<TvShowTranslations>(
      `/tv/${tvShowId}/translations`,
      {},
      mockTvShowTranslations,
    )
  }

  /**
   * Get the videos that have been added to a TV show.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-videos
   */
  async getVideos(tvShowId: string, params: { language?: Language } = {}) {
    return await this.get<TvShowVideos>(
      `/tv/${tvShowId}/watch/providers`,
      { params },
      mockTvShowVideos,
    )
  }

  /**
   * Powered by our partnership with JustWatch, you can query this method to get a list of the availabilities per country by provider.
   *
   * This is not going to return full deep links, but rather, it's just enough information to display what's available where.
   *
   * You can link to the provided TMDB URL to help support TMDB and provide the actual deep links to the content.
   *
   * Please note: In order to use this data you must attribute the source of the data as JustWatch. If we find any usage not complying with these terms we will revoke access to the API.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-watch-providers
   */
  async getWatchProviders(tvShowId: string) {
    return await this.get<TvShowVideos>(
      `/tv/${tvShowId}/watch/providers`,
      {},
      mockTvShowVideos,
    )
  }

  async rateTvShow(tvShowId: string) {}
  async deleteRating(tvShowId: string) {}
}
