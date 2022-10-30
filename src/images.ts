/**
 * # Images
 *
 * You'll notice that movie, TV and person objects contain references to different file paths. In order to generate a fully working image URL, you'll need 3 pieces of data. Those pieces are a base_url, a file_size and a file_path.
 *
 * The first two pieces can be retrieved by calling the /configuration API and the third is the file path you're wishing to grab on a particular media object. Here's what a full image URL looks like if the poster_path of /kqjL17yufvn9OVLyXYpvtyrFfak.jpg was returned for a movie, and you were looking for the w500 size:
 *
 * https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
 * Company and network logos are available in two formats, SVG and PNG. All of the logo_path fields will return a .png. This is to maintain backwards compatibility since SVG support was only added very recently. When looking at the image methods there is a new field called file_type that will show you the original version of the asset that was uploaded. For SVG's, you should call the original image size since we don't resize them. If you prefer to grab PNG's, you can call any size you wish just like normal.
 *
 * Take for instance Netflix's logo (wwemzKWzjKYJFfCeiB57q3r4Bcm.svg), you can call any of the following:
 *
 * - https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg
 * - https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
 * - https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
 */
export default class Images {
  static base_url = "http://image.tmdb.org/t/p/"
  static secure_base_url = "https://image.tmdb.org/t/p/"

  static backdropSrc(
    backdrop_path: string,
    size: BACKDROP_SIZE = "w300",
  ): string {
    return `${this.secure_base_url}${size}/${backdrop_path}`
  }

  static logoSrc(logo_path: string, size: LOGO_SIZE = "w92"): string {
    return `${this.secure_base_url}${size}/${logo_path}`
  }

  static posterSrc(poster_path: string, size: POSTER_SIZE = "w185"): string {
    return `${this.secure_base_url}${size}/${poster_path}`
  }

  static profileSrc(profile_path: string, size: PROFILE_SIZE = "w185"): string {
    return `${this.secure_base_url}${size}/${profile_path}`
  }

  static stillSrc(still_path: string, size: STILL_SIZE = "w185"): string {
    return `${this.secure_base_url}${size}/${still_path}`
  }
}

type BACKDROP_SIZE = "w300" | "w780" | "w1280" | "original"
type LOGO_SIZE = "w45" | "w92" | "w154" | "w185" | "w300" | "w500" | "original"
type POSTER_SIZE =
  | "w92"
  | "w154"
  | "w185"
  | "w342"
  | "w500"
  | "w780"
  | "original"
type PROFILE_SIZE = "w45" | "w185" | "h632" | "original"
type STILL_SIZE = "w92" | "w185" | "w300" | "original"
