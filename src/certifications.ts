import { Api } from "./api"
import {
  MovieCertifications,
  mockMovieCertifications,
} from "./certifications/movie"

export default class Certifications extends Api {
  /**
   * Get an up to date list of the officially supported movie certifications on TMDB.
   * @link https://developers.themoviedb.org/3/certifications/get-movie-certifications
   */
  async getMovieCertifications() {
    return await this.get<MovieCertifications>(
      `/certification/movie/list`,
      {},
      mockMovieCertifications,
    )
  }

  /**
   * Get an up to date list of the officially supported movie certifications on TMDB.
   *
   * @link https://developers.themoviedb.org/3/certifications/get-movie-certifications
   */
  async getTvCertifications() {
    return await this.get<MovieCertifications>(
      `/certification/movie/list`,
      {},
      mockMovieCertifications,
    )
  }
}
