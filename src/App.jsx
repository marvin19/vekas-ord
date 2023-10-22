import { useState, useEffect } from 'react'
import {getISODay, getWeek } from 'date-fns';
import words from './data';
import './App.css'

const getWordForCurrentWeek = () => {
  const currentWeek = getWeek(new Date());
  const wordIndex = (currentWeek - 1) % words.length;
  return words[wordIndex];
}

function App() {
  const [currentWord, setCurrentWord] = useState(getWordForCurrentWeek);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const isoDay = getISODay(new Date());

      // Show a new word every monday (ISO day 1);
      if(isoDay === 1){
        setCurrentWord(getWordForCurrentWeek);
      }
    }, 1000 * 60 * 60 * 12); // Check every 12 hours

    return() => clearInterval(intervalId);
  }, [])




  return (
    <>
      <h1 className="hidden">Vekas ord: </h1>
      <h2>
        <span aria-label="hidden">⭐️</span>
         {currentWord.word} 
         <span aria-label="hidden">⭐️</span>
      </h2>
      <p>Link: <a href={currentWord.link}>{currentWord.link}</a></p>
    
    </>
  )
}

export default App
