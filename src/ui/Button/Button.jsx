import React from 'react'

export const Button = ({children, className, handler}) => {
  return (
    <button onClick={handler} className={className}>{children}</button>
  )
}
