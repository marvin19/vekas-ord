import React from 'react'
import { getWeek, startOfWeek } from 'date-fns';
import { nb } from 'date-fns/locale';
import words from './data';
import WeekWord from './WeekWord';
import './App.css'

interface WeekObj {
  week: number;
  word: string; 
  link: string;
}

function App() {
  // Getting current week
  const currentWeek =  getWeek(new Date(), { locale: nb, weekStartsOn: 1 });
  console.log(currentWeek);

  // Finding word based on current week
  const weekObj: WeekObj | undefined = words.find(word => word.week === currentWeek);

  if (!weekObj) {
    return <div>Ingen ord funnet</div>;
  }

  return (
    <div className="word-container">
      <h1 className="hidden">Vekas ord: </h1>
      <WeekWord weekObj={weekObj} />
    </div>
  )
}

export default App
