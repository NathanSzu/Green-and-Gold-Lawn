import { useState, useEffect } from 'react';
import summer from './Assets/Grass.jpg';
import winter from './Assets/Snow.jpg';
import spring from './Assets/Spring.jpg';
import fall from './Assets/Fall.jpg';
import Background from './Components/Background';
import gsap from "gsap";

function App() {
  const [season, setSeason] = useState('')

  useEffect(() => {
    var currentDate = `${new Date()}`;
    if (currentDate.includes('Dec') || currentDate.includes('Jan') || currentDate.includes('Feb')) {
      setSeason(winter);
    } else if (currentDate.includes('Mar') || currentDate.includes('Apr') || currentDate.includes('May')) {
      setSeason(spring)
    } else if (currentDate.includes('Jun') || currentDate.includes('Jul') || currentDate.includes('Aug')) {
      setSeason(summer)
    } else if (currentDate.includes('Sep') || currentDate.includes('Oct') || currentDate.includes('Nov')) {
      setSeason(fall)
    }
  }, [])

  // Function to toggle season backgrounds and other elements
  const toggleSeason = (e) => {
    if (e.target.value === 'spring') {
      setSeason(spring)
    } else if (e.target.value === 'summer') {
      setSeason(summer)
    } else if (e.target.value === 'fall') {
      setSeason(fall)
    } else if (e.target.value === 'winter') {
      setSeason(winter)
    }
  }

  return (
    <div>
      <button value='summer' onClick={toggleSeason}>Summer!</button>
      <button value='fall' onClick={toggleSeason}>Fall!</button>
      <button value='winter' onClick={toggleSeason}>Winter!</button>
      <button value='spring' onClick={toggleSeason}>Spring!</button>
      <div className='background summer'>
        <Background src={season} alt='Summer image' />
      </div>
    </div>
  );
}

export default App;
