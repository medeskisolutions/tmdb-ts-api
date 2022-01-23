import axios, { AxiosInstance } from 'axios'

import account from './account'
import authentication from './authentication'
import certifications from './certifications'
import changes from './changes'
import collection from './collection'
import company from './company'
import configuration from './configuration'
import credit from './credit'
import discover from './discover'
import find from './find'
import genres from './genres'
import guestSession from './guestSession'
import keyword from './keyword'
import movie from './movie'
import movies from './movies'
import network from './network'
import people from './people'
import person from './person'
import review from './review'
import search from './search'
import trending from './trending'
import tvShow from './tvShow'
import tvShowSeason from './tvShowSeason'
import tvShows from './tvShows'
import watchProviders from './watchProviders'

const _tmdbAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: process.env.TMDB_API },
  timeout: 5000
})

export async function tmdbGet<T>(
  uri: string,
  params: Object,
  mock: T
): Promise<T> {
  const { data } =
    process.env.NODE_ENV === 'test'
      ? { data: mock }
      : await _tmdbAxios.get<T>(uri, { params })
  return data
}

/**
 * The Movie Database API
 *
 * @version 3
 * @link https://developers.themoviedb.org/3/
 * @link http://json2ts.com
 */
export class Tmdb {
  account = account
  authentication = authentication
  certifications = certifications
  changes = changes
  collection = collection
  company = company
  configuration = configuration
  credit = credit
  discover = discover
  find = find
  genres = genres
  guestSession = guestSession
  keyword = keyword
  lists = {}
  movie = movie
  movies = movies
  network = network
  trending = trending
  person = person
  people = people
  review = review
  search = search
  tvShow = {
    ...tvShow,
    season: tvShowSeason
  }
  tvShows = tvShows
  watchProviders = watchProviders
}
