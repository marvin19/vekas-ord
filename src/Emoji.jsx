import PropTypes from 'prop-types';

const Emoji = ({emoji}) => {
  return (
    <span className="emoji" aria-label="hidden">{emoji}</span>
  )
}

Emoji.propTypes = {
  emoji: PropTypes.string.isRequired
}

export default Emoji