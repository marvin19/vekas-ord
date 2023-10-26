import React from 'react';

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

export default SpeechComponent