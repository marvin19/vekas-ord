import Emoji from './Emoji';
import PropTypes from 'prop-types';
import SpeechComponent from './SpeechComponent';

const WeekWord = ({ weekObj }) => {
  return (
    <div>
        <h2 className="small">Veke {weekObj.week}</h2>
        <h2>
            <Emoji emoji="🇳🇴" />
            {weekObj.word}
            <Emoji emoji="🇳🇴" />
        </h2>
        <SpeechComponent wordToRead={weekObj.word} />
        <p>
            Link: <a href={weekObj.link}>Link til ordbok</a>
        </p>
    </div>
  )
}

WeekWord.propTypes = {
  weekObj: PropTypes.shape({
    week: PropTypes.number.isRequired,
    word: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired,
}

export default WeekWord;