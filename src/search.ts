import { Api } from "./api"
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

export default class Search extends Api {
  /**
   * Search for collections.
   *
   * @link https://developers.themoviedb.org/3/search/search-collections
   */
  async searchCollections(
    query: string,
    params?: {
      language?: Language
      page?: number
    },
  ) {
    return await this.get<CollectionsSearchResults>(
      `/search/collections`,
      { query, params },
      mockCollectionsSearchResults,
    )
  }

  /**
   * Search for companies.
   *
   * @link https://developers.themoviedb.org/3/search/search-companies
   */
  async searchCompanies(
    query: string,
    params?: {
      page?: number
    },
  ) {
    return await this.get<CompaniesSearchResults>(
      `/search/company`,
      { query, params },
      mockCompaniesSearchResults,
    )
  }

  /**
   * Search for keywords.
   *
   * @link https://developers.themoviedb.org/3/search/search-keywords
   */
  async searchKeywords(
    query: string,
    params?: {
      page?: number
    },
  ) {
    return await this.get<KeywordsSearchResults>(
      `/search/keywords`,
      { query, params },
      mockKeywordsSearchResults,
    )
  }

  /**
   * Search for movies.
   *
   * @link https://developers.themoviedb.org/3/search/search-movies
   */
  async searchMovies(
    query: string,
    params?: {
      include_adult?: boolean
      language?: Language
      page?: number
      region?: Country
      year?: number
      primary_release_year?: number
    },
  ) {
    return await this.get<MoviesSearchResults>(
      `/search/movie`,
      { query, params },
      mockMoviesSearchResults,
    )
  }

  /**
   * Search multiple models in a single request. Multi search currently
   * supports searching for movies, tv shows and people in a single request.
   *
   * @link https://developers.themoviedb.org/3/search/multi-search
   */
  async searchMulti(
    query: string,
    params?: {
      include_adult?: boolean
      language?: Language
      page?: number
      region?: Country
    },
  ) {
    return await this.get<MultiSearchResults>(
      `/search/multi`,
      { query, params },
      mockMultiSearchResults,
    )
  }

  /**
   * Search for people.
   *
   * @link https://developers.themoviedb.org/3/search/search-people
   */
  async searchPeople(
    query: string,
    params?: {
      include_adult?: boolean
      language?: Language
      page?: number
      region?: Country
    },
  ) {
    return await this.get<PeopleSearchResults>(
      `/search/person`,
      { query, params },
      mockPeopleSearchResults,
    )
  }

  /**
   * Search for a TV show.
   *
   * @link https://developers.themoviedb.org/3/search/search-tv-shows
   */
  async searchTvShows(
    query: string,
    params?: {
      include_adult?: boolean
      language?: Language
      page?: number
      first_air_date_year?: number
    },
  ) {
    return await this.get<TvShowsSearchResults>(
      `/search/tv`,
      { query, params },
      mockTvShowsSearchResults,
    )
  }
}
