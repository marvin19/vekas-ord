import React from 'react'
import { getWeek } from 'date-fns'
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
  const currentWeek =  getWeek(new Date());

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
