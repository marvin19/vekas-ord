import React from 'react'
import { Link } from 'react-router-dom';
import { getWeek, startOfWeek } from 'date-fns';
import { nb } from 'date-fns/locale';
import words from './data';
import WordTable from './pages/WordTable';
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

  // Finding word based on current week
  const weekObj: WeekObj | undefined = words.find(word => word.week === currentWeek);

  if (!weekObj) {
    return <div>Ingen ord funnet</div>;
  }

  return (
    <div className="word-container">
      <h1 className="hidden">Vekas ord: </h1>
      <WeekWord weekObj={weekObj} />
        <Link to="/WordTable" className="btn-main">Sjå oversikt over tidlegare ord </Link>
    </div>
  )
}

export default App
