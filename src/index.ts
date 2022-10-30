import { TmdbApiOptions } from "./api"
import Authentication from "./authentication"
import Certifications from "./certifications"
import Changes from "./changes"
import Collection from "./collection"
import Company from "./company"
import Configuration from "./configuration"
import Credit from "./credit"
import Discover from "./discover"
import Find from "./find"
import Genres from "./genres"
import GuestSession from "./guestSession"
import Images from "./images"
import Keyword from "./keyword"
import List from "./lists"
import Movie from "./movie"
import Movies from "./movies"
import Network from "./network"
import People from "./people"
import Person from "./person"
import Review from "./review"
import Search from "./search"
import Trending from "./trending"
import TvShow from "./tvShow"
import TvShows from "./tvShows"
import WatchProviders from "./watchProviders"

export interface PaginatedResponse<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

/**
 * The Movie Database API
 *
 * @version 3
 * @link https://developers.themoviedb.org/3/
 * @link http://json2ts.com
 */
export class Tmdb {
  authentication: Authentication
  certifications: Certifications
  changes: Changes
  collection: Collection
  company: Company
  configuration: Configuration
  credit: Credit
  discover: Discover
  find: Find
  genres: Genres
  guestSession: GuestSession
  images: Images
  keyword: Keyword
  list: List
  movie: Movie
  movies: Movies
  network: Network
  trending: Trending
  person: Person
  people: People
  review: Review
  search: Search
  tvShow: TvShow
  tvShows: TvShows
  watchProviders: WatchProviders

  constructor(options: TmdbApiOptions) {
    this.authentication = new Authentication(options)
    this.certifications = new Certifications(options)
    this.changes = new Changes(options)
    this.collection = new Collection(options)
    this.company = new Company(options)
    this.configuration = new Configuration(options)
    this.credit = new Credit(options)
    this.discover = new Discover(options)
    this.find = new Find(options)
    this.genres = new Genres(options)
    this.guestSession = new GuestSession(options)
    this.images = new Images()
    this.keyword = new Keyword(options)
    this.list = new List(options)
    this.movie = new Movie(options)
    this.movies = new Movies(options)
    this.network = new Network(options)
    this.trending = new Trending(options)
    this.person = new Person(options)
    this.people = new People(options)
    this.review = new Review(options)
    this.search = new Search(options)
    this.tvShow = new TvShow(options)
    this.tvShows = new TvShows(options)
    this.watchProviders = new WatchProviders(options)
  }
}
