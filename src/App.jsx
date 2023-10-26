import { useState, useEffect } from 'react'
import { getISODay, getWeek } from 'date-fns';
import words from './data';
import Emoji from './Emoji';
import SpeechComponent from './SpeechComponent';
import WeekWord from './WeekWord';
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

  return (
    <div>
      <h1 className="hidden">Vekas ord: </h1>
      <WeekWord weekObj={weekObj} />
    </div>
  )
}

export default App
