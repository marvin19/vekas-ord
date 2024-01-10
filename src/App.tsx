import React from 'react'
import { getWeek, getYear } from 'date-fns';
import { nb } from 'date-fns/locale';
import { words, WordsByYear, Word, Ord } from './data';
import WeekWord from './WeekWord';
import './App.css'

function App() {
  // Getting current week
  const currentDate = new Date(), 
      currentWeek =  getWeek(new Date(), { locale: nb, weekStartsOn: 1 }),
      currentYear = getYear(currentDate);

  // Finding words for current year

  const wordsForCurrentYear: Word[] = words[currentYear];

  if (!wordsForCurrentYear) {
    return <div>Ingen ord funnet for dette året</div>;
  }

  // Finding word based on current week
  const weekObj: Word | undefined = wordsForCurrentYear.find(word => word.week === currentWeek);

  if (!weekObj) {
    return <div>Ingen ord funnet for denne uken</div>;
  }

  return (
    <div className="word-container">
      <h1 className="hidden">Vekas ord: </h1>
      <WeekWord weekObj={weekObj} />
    </div>
  )
}

export default App
