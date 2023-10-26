import { useState, useEffect } from 'react'
import { getISODay, getWeek } from 'date-fns';
import words from './data';
import SpeechComponent from './SpeechComponent';
import './App.css'

function App() {
  const [currentWord, setCurrentWord] = useState('');

  // Getting current week
  const currentWeek =  getWeek(new Date());

  // Finding word based on current week
  const weekObj = words.find(word => word.week === currentWeek);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const isoDay = getISODay(new Date());

      // Show a new word every monday (ISO day 1);
      if(isoDay === 1){
        setCurrentWord(weekObj.word);
      }
    }, 1000 * 60 * 60 * 12); // Check every 12 hours

    return() => clearInterval(intervalId);
  }, [])

  console.log(weekObj.word);

  return (
    <div>
      <h1 className="hidden">Vekas ord: </h1>
      <div>
        <h2 className="small">Veke {currentWeek}</h2>
        <h2>
        <span aria-label="hidden">⭐️</span>
         {weekObj.word} 
         <span aria-label="hidden">⭐️</span>
        </h2>
        <SpeechComponent wordToRead={weekObj.word} />
      </div>
      <p>Link: <a href={weekObj.link}>{weekObj.link}</a></p>
    </div>
  )
}

export default App
