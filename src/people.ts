import { Api } from "./api"
import {Language} from "./configuration/languages";
import {mockPopularPeople, PopularPeople} from "./people/popular";

export default class People extends Api {
  /**
   * Get the list of popular people on TMDB. This list updates daily.
   *
   * @link https://developers.themoviedb.org/3/people/get-popular-people
   */
  async getPopular( params?: { language?: Language; page?: number },) {
    return await this.get<PopularPeople>(
      `/person/popular`,
      { params },
      mockPopularPeople,
    )
  }
}
