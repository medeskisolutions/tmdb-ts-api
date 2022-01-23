import { tmdbGet } from '.'
import { Language } from './language'
import { TvShowDetails, mockTvShowDetails } from './tv/{tv_id}'
import {
  TvShowAggregateCredits,
  mockTvShowAggregateCredits
} from './tv/{tv_id}/aggregate_credits'
import {
  TvShowAlternativeTitles,
  mockTvShowAlternativeTitles
} from './tv/{tv_id}/alternative_titles'
import {
  TvShowContentRatings,
  mockTvShowContentRatings
} from './tv/{tv_id}/content_ratings'
import { TvShowCredits, mockTvShowCredits } from './tv/{tv_id}/credits'
import {
  TvShowEpisodeGroups,
  mockTvShowEpisodeGroups
} from './tv/{tv_id}/episode_groups'
import {
  TvShowExternalIds,
  mockTvShowExternalIds
} from './tv/{tv_id}/external_ids'
import { TvShowImages, mockTvShowImages } from './tv/{tv_id}/images'
import { TvShowKeywords, mockTvShowKeywords } from './tv/{tv_id}/keywords'
import {
  TvShowRecommendations,
  mockTvShowRecommendations
} from './tv/{tv_id}/recommendations'
import { TvShowReviews, mockTvShowReviews } from './tv/{tv_id}/reviews'
import {
  TvShowScreenedTheatrically,
  mockTvShowScreenedTheatrically
} from './tv/{tv_id}/screened_theatrically'
import { SimilarTvShows, mockSimilarTvShows } from './tv/{tv_id}/similar'
import {
  TvShowTranslations,
  mockTvShowTranslations
} from './tv/{tv_id}/translations'
import { TvShowVideos, mockTvShowVideos } from './tv/{tv_id}/videos'

export default {
  /**
   * Get the primary TV show details by id.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-details
   */
  getDetails: async (
    tvShowId: string,
    params: { language?: Language } = {}
  ) => {
    // TODO add append to response values
    return await tmdbGet<TvShowDetails>(
      `/tv/${tvShowId}`,
      { params },
      mockTvShowDetails
    )
  },

  getAccountStates: async () => {},

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
  getAggregateCredits: async (
    tvShowId: string,
    params: { language?: Language } = {}
  ) => {
    return await tmdbGet<TvShowAggregateCredits>(
      `/tv/${tvShowId}/aggregate_credits`,
      { params },
      mockTvShowAggregateCredits
    )
  },

  /**
   * Returns all of the alternative titles for a TV show.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-alternative-titles
   */
  getAlternativeTitles: async (
    tvShowId: string,
    params: { language?: Language } = {}
  ) => {
    return await tmdbGet<TvShowAlternativeTitles>(
      `/tv/${tvShowId}/alternative_titles`,
      { params },
      mockTvShowAlternativeTitles
    )
  },

  getChanges: async () => {},

  /**
   * Get the list of content ratings (certifications) that have been added to a TV show.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-content-ratings
   */
  getContentRatings: async (
    tvShowId: string,
    params: { language?: Language } = {}
  ) => {
    return await tmdbGet<TvShowCredits>(
      `/tv/${tvShowId}/content_ratings`,
      { params },
      mockTvShowCredits
    )
  },

  /**
   * Get the credits (cast and crew) that have been added to a TV show.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-credits
   */
  getCredits: async (
    tvShowId: string,
    params: { language?: Language } = {}
  ) => {
    return await tmdbGet<TvShowContentRatings>(
      `/tv/${tvShowId}/credits`,
      { params },
      mockTvShowContentRatings
    )
  },

  /**
   * Get all of the episode groups that have been created for a TV show.
   *
   * With a group ID you can call the get TV episode group details method.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-episode-groups
   */
  getEpisodeGroups: async (
    tvShowId: string,
    params: { language?: Language } = {}
  ) => {
    return await tmdbGet<TvShowEpisodeGroups>(
      `/tv/${tvShowId}/episode_groups`,
      { params },
      mockTvShowEpisodeGroups
    )
  },

  /**
   * Get the external ids for a TV show.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-external-ids
   */
  getExternalIds: async (
    tvShowId: string,
    params: { language?: Language } = {}
  ) => {
    return await tmdbGet<TvShowExternalIds>(
      `/tv/${tvShowId}/external_ids`,
      { params },
      mockTvShowExternalIds
    )
  },

  /**
   * Get the images that belong to a TV show.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-images
   */
  getImages: async (tvShowId: string, params: { language?: Language } = {}) => {
    return await tmdbGet<TvShowImages>(
      `/tv/${tvShowId}/images`,
      { params },
      mockTvShowImages
    )
  },

  /**
   * Get the keywords that have been added to a TV show.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-keywords
   */
  getKeywords: async (tvShowId: string) => {
    return await tmdbGet<TvShowKeywords>(
      `/tv/${tvShowId}/images`,
      {},
      mockTvShowKeywords
    )
  },

  /**
   * Get the list of TV show recommendations for this item.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-recommendations
   */
  getRecommendations: async (
    tvShowId: string,
    params: { language?: Language; page?: number } = {}
  ) => {
    return await tmdbGet<TvShowRecommendations>(
      `/tv/${tvShowId}/recommendations`,
      { params },
      mockTvShowRecommendations
    )
  },

  /**
   * Get the reviews for a TV show.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-reviews
   */
  getReviews: async (
    tvShowId: string,
    params: { language?: Language; page?: number } = {}
  ) => {
    return await tmdbGet<TvShowReviews>(
      `/tv/${tvShowId}/reviews`,
      { params },
      mockTvShowReviews
    )
  },

  /**
   * Get a list of seasons or episodes that have been screened in a film festival or theatre.
   *
   * @link https://developers.themoviedb.org/3/tv/get-screened-theatrically
   */
  getScreenedTheatrically: async (tvShowId: string) => {
    return await tmdbGet<TvShowScreenedTheatrically>(
      `/tv/${tvShowId}/screened_theatrically`,
      {},
      mockTvShowScreenedTheatrically
    )
  },

  /**
   * Get a list of similar TV shows. These items are assembled
   * by looking at keywords and genres.
   *
   * @link https://developers.themoviedb.org/3/tv/get-similar-tv-shows
   */
  getSimilar: async (
    tvShowId: string,
    params: { language?: Language; page?: number } = {}
  ) => {
    return await tmdbGet<SimilarTvShows>(
      `/tv/${tvShowId}/similar`,
      { params },
      mockSimilarTvShows
    )
  },

  /**
   * Get a list of the translations that exist for a TV show.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-translations
   */
  getTranslations: async (tvShowId: string) => {
    return await tmdbGet<TvShowTranslations>(
      `/tv/${tvShowId}/translations`,
      {},
      mockTvShowTranslations
    )
  },

  /**
   * Get the videos that have been added to a TV show.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-videos
   */
  getVideos: async (tvShowId: string, params: { language?: Language } = {}) => {
    return await tmdbGet<TvShowVideos>(
      `/tv/${tvShowId}/watch/providers`,
      { params },
      mockTvShowVideos
    )
  },

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
  getWatchProviders: async (tvShowId: string) => {
    return await tmdbGet<TvShowVideos>(
      `/tv/${tvShowId}/watch/providers`,
      {},
      mockTvShowVideos
    )
  },

  rateTvShow: async (tvShowId: string) => {},
  deleteRating: async (tvShowId: string) => {}
}
