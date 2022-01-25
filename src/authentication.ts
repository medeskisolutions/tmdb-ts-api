import { Api } from "./api"

export default class Authentication extends Api {
  async createGuestSession() {}
  async createRequestToken() {}
  async createSession() {}
  async createSessionWithLogin() {}
  async deleteSession() {}
}
