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
    console.log('clicked')
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
      <div className='row pr-2 pl-2'>
        <button className={season === spring ? 'navtab col-3 clear' : 'navtab col-3'} value='spring' onClick={toggleSeason}>Spring</button>
        <button className={season === summer ? 'navtab col-3 clear' : 'navtab col-3'} value='summer' onClick={toggleSeason}>Summer</button>
        <button className={season === fall ? 'navtab col-3 clear' : 'navtab col-3'} value='fall' onClick={toggleSeason}>Fall</button>
        <button className={season === winter ? 'navtab col-3 clear' : 'navtab col-3'} value='winter' onClick={toggleSeason}>Winter</button>
      </div>
      <div className='background'>
        <Background src={season} alt='' />
      </div>
    </div>
  );
}

export default App;
