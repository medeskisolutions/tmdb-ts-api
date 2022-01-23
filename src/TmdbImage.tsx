import classNames from "classnames"

import { TmdbSize } from "./configuration/api"

const TmdbImage: React.FC<{ src: string; alt: string; size: string }> = ({
  src,
  alt,
  size,
}) => {
  const imgSrc = `https://image.tmdb.org/t/p/${size}` + src

  return (
    <img src={imgSrc} className={classNames(["w-full h-auto"])} alt={alt} />
  )
}

export default TmdbImage
