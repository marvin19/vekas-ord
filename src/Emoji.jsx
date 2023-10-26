import React from 'react'

const Emoji = ({emoji}) => {
  return (
    <span className="emoji" aria-label="hidden">{emoji}</span>
  )
}

export default Emoji