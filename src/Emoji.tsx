import React from 'react';
import PropTypes from 'prop-types';


interface EmojiProps {
  emoji: string
}

const Emoji: React.FC<EmojiProps> = ({emoji}) => {
  return (
    <span className="emoji" aria-label="hidden">{emoji}</span>
  )
}

Emoji.propTypes = {
  emoji: PropTypes.string.isRequired
}

export default Emoji