import PropTypes from 'prop-types';

const SpeechComponent = ({wordToRead}) => {

    const handleClick = () => {
        // Use Web Speech API to read the fixed text
        const speechSynthesis = window.speechSynthesis;
        const speechText = new SpeechSynthesisUtterance(wordToRead);

        // Set the language to Norwegian
        speechText.lang = 'nb-NO';

        speechSynthesis.speak(speechText);
    }

  return (
    <div>
        <button onClick={handleClick}>Les høgt</button>
    </div>
  )
}

SpeechComponent.propTypes = {
  wordToRead: PropTypes.string.isRequired
};

export default SpeechComponent