import { tmdbGet } from "."
import { Country } from "./configuration/countries"
import { Language } from "./configuration/languages"
import {
  CollectionSearchResult,
  CollectionsSearchResults,
  mockCollectionsSearchResults,
} from "./search/collections"
import {
  CompaniesSearchResults,
  CompanySearchResult,
  mockCompaniesSearchResults,
} from "./search/companies"
import {
  KeywordSearchResult,
  KeywordsSearchResults,
  mockKeywordsSearchResults,
} from "./search/keywords"
import {
  MovieSearchResult,
  MoviesSearchResults,
  mockMoviesSearchResults,
} from "./search/movies"
import {
  MultiMovieSearchResult,
  MultiPersonSearchResult,
  MultiSearchResults,
  MultiTvShowSearchResult,
  mockMultiSearchResults,
} from "./search/multi"
import {
  PeopleSearchResults,
  PersonSearchResult,
  mockPeopleSearchResults,
} from "./search/people"
import {
  TvShowSearchResult,
  TvShowsSearchResults,
  mockTvShowsSearchResults,
} from "./search/tv-shows"

export {
  CollectionsSearchResults,
  CollectionSearchResult,
  CompaniesSearchResults,
  CompanySearchResult,
  KeywordsSearchResults,
  KeywordSearchResult,
  MoviesSearchResults,
  MovieSearchResult,
  MultiSearchResults,
  MultiMovieSearchResult,
  MultiPersonSearchResult,
  MultiTvShowSearchResult,
  PeopleSearchResults,
  PersonSearchResult,
  TvShowsSearchResults,
  TvShowSearchResult,
}

export default {
  /**
   * Search for collections.
   *
   * @link https://developers.themoviedb.org/3/search/search-collections
   */
  searchCollections: async (
    query: string,
    params?: {
      language?: Language
      page?: number
    },
  ) => {
    return await tmdbGet<CollectionsSearchResults>(
      `/search/collections`,
      { query, params },
      mockCollectionsSearchResults,
    )
  },

  /**
   * Search for companies.
   *
   * @link https://developers.themoviedb.org/3/search/search-companies
   */
  searchCompanies: async (
    query: string,
    params?: {
      page?: number
    },
  ) => {
    return await tmdbGet<CompaniesSearchResults>(
      `/search/company`,
      { query, params },
      mockCompaniesSearchResults,
    )
  },

  /**
   * Search for keywords.
   *
   * @link https://developers.themoviedb.org/3/search/search-keywords
   */
  searchKeywords: async (
    query: string,
    params?: {
      page?: number
    },
  ) => {
    return await tmdbGet<KeywordsSearchResults>(
      `/search/keywords`,
      { query, params },
      mockKeywordsSearchResults,
    )
  },

  /**
   * Search for movies.
   *
   * @link https://developers.themoviedb.org/3/search/search-movies
   */
  searchMovies: async (
    query: string,
    params?: {
      include_adult?: boolean
      language?: Language
      page?: number
      region?: Country
      year?: number
      primary_release_year?: number
    },
  ) => {
    return await tmdbGet<MoviesSearchResults>(
      `/search/movie`,
      { query, params },
      mockMoviesSearchResults,
    )
  },

  /**
   * Search multiple models in a single request. Multi search currently
   * supports searching for movies, tv shows and people in a single request.
   *
   * @link https://developers.themoviedb.org/3/search/multi-search
   */
  searchMulti: async (
    query: string,
    params?: {
      include_adult?: boolean
      language?: Language
      page?: number
      region?: Country
    },
  ) => {
    return await tmdbGet<MultiSearchResults>(
      `/search/multi`,
      { query, params },
      mockMultiSearchResults,
    )
  },

  /**
   * Search for people.
   *
   * @link https://developers.themoviedb.org/3/search/search-people
   */
  searchPeople: async (
    query: string,
    params?: {
      include_adult?: boolean
      language?: Language
      page?: number
      region?: Country
    },
  ) => {
    return await tmdbGet<PeopleSearchResults>(
      `/search/person`,
      { query, params },
      mockPeopleSearchResults,
    )
  },

  /**
   * Search for a TV show.
   *
   * @link https://developers.themoviedb.org/3/search/search-tv-shows
   */
  searchTvShows: async (
    query: string,
    params?: {
      include_adult?: boolean
      language?: Language
      page?: number
      first_air_date_year?: number
    },
  ) => {
    return await tmdbGet<TvShowsSearchResults>(
      `/search/tv`,
      { query, params },
      mockTvShowsSearchResults,
    )
  },
}
