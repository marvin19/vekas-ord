import { getWeek } from 'date-fns'
import words from './data';
import WeekWord from './WeekWord';
import './App.css'

function App() {
  // Getting current week
  const currentWeek =  getWeek(new Date());

  // Finding word based on current week
  const weekObj = words.find(word => word.week === currentWeek);

  return (
    <div className="word-container">
      <h1 className="hidden">Vekas ord: </h1>
      <WeekWord weekObj={weekObj} />
    </div>
  )
}

export default App
