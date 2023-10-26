import Emoji from './Emoji';
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

export default WeekWord