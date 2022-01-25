import { Api } from "./api"

export default class List extends Api {
  /**
   * Get the details of a list.
   *
   * @link https://developers.themoviedb.org/3/lists/get-list-details
   */
  async getDetails() {}

  /**
   * Get the status of a list item. Checks if a movie has already been added
   * to the list.
   *
   * @link https://developers.themoviedb.org/3/lists/check-item-status
   */
  async getItemStatus() {}
}
