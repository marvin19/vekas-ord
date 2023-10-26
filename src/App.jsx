import words from './data';
import WeekWord from './WeekWord';
import './App.css'

function App() {
  // Getting current week
  const currentWeek =  51; //getWeek(new Date());

  // Finding word based on current week
  const weekObj = words.find(word => word.week === currentWeek);

  return (
    <div>
      <h1 className="hidden">Vekas ord: </h1>
      <WeekWord weekObj={weekObj} />
    </div>
  )
}

export default App
