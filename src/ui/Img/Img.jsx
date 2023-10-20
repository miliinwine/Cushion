import React from 'react'

export const Img = ({className, src, width, height, alt}) => {
  return (
    <img className={className} src={src} width={width} height={height} alt={alt} />
  )
}
