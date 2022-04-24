import { Api } from "./api"
import { Language } from "./configuration/languages"
import { PersonDetails, mockPersonDetails } from "./person/details"
import {
  PersonMovieCredits,
  mockPersonMovieCredits,
} from "./person/movie_credits"

export default class Person extends Api {
  /**
   * Get the primary person details by id.
   *
   * @link https://developers.themoviedb.org/3/people/get-person-details
   */
  async getDetails(personId: string | number, params?: { language: Language }) {
    return await this.get<PersonDetails>(
      `/person/${personId}`,
      { params },
      mockPersonDetails,
    )
  }

  async getChanges(personId: string | number) {}

  /**
   * Get the movie credits for a person.
   *
   * @link https://developers.themoviedb.org/3/people/get-person-movie-credits
   */
  async getMovieCredits(
    personId: string | number,
    params?: { language: Language },
  ) {
    return await this.get<PersonMovieCredits>(
      `/person/${personId}/movie_credits`,
      { params },
      mockPersonMovieCredits,
    )
  }

  /**
   * Get the TV show credits for a person.
   *
   * @link https://developers.themoviedb.org/3/people/get-person-tv-credits
   */
  async getTvCredits(
    personId: string | number,
    params?: { language: Language },
  ) {
    return await this.get<PersonMovieCredits>(
      `/person/${personId}/movie_credits`,
      { params },
      mockPersonMovieCredits,
    )
  }

  async getCombinedCredits(personId: string | number) {}

  /**
   * Get the external ids for a person. We currently support the following external sources.
   *
   * @link https://developers.themoviedb.org/3/people/get-person-external-ids
   */
  async getExternalIds(personId: string | number) {
    return await this.get<PersonExternalIds>(
      `/person/${personId}/movie_credits`,
      { params },
      mockPersonExternalIds,
    )
  }

  async getImages(personId: string | number) {}

  async getTaggedImages(personId: string | number) {}

  async getTranslations(personId: string | number) {}
}
