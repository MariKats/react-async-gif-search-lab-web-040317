import React from 'react'

const Gif = ({id, images}) => {
  return (
    <li key={id}>
      <img src={images.fixed_width_small.url}/>
    </li>
  )
}

const GifList = ({gifs}) => {
  return (
    <ol>
      {gifs.map(Gif)}
    </ol>
  )
}



GifList.defaultProps = {
  gifs: []
}

export default GifList;
