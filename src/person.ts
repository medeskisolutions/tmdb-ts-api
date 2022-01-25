import { Api } from "./api"

export default class Person extends Api {
  async getDetails(personId: string) {}
  async getChanges(personId: string) {}
  async getMovieCredits(personId: string) {}
  async getTvShowCredits(personId: string) {}
  async getCombinedCredits(personId: string) {}
  async getExternalIds(personId: string) {}
  async getImages(personId: string) {}
  async getTaggedImages(personId: string) {}
  async getTranslations(personId: string) {}
}
