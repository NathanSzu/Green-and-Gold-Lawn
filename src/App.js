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
      gsap.to('.winter', {css:{opacity:100}})
      setSeason('winter')
    } else if (currentDate.includes('Mar') || currentDate.includes('Apr') || currentDate.includes('May')) {
      gsap.to('.spring', {css:{opacity:100}})
      setSeason('spring')
    } else if (currentDate.includes('Jun') || currentDate.includes('Jul') || currentDate.includes('Aug')) {
      gsap.to('.summer', {css:{opacity:100}})
      setSeason('summer')
    } else if (currentDate.includes('Sep') || currentDate.includes('Oct') || currentDate.includes('Nov')) {
      gsap.to('.fall', {css:{opacity:100}})
      setSeason('fall')
    }
  }, [])

  const toggleSeason = () => {
    
  }

  return (
    <div>
      <div className='background summer'>
        <Background src={summer} alt='Summer image' />
      </div>
      <div className='background winter'>
        <Background src={winter} alt='Winter image' />
      </div>
      <div className='background spring'>
        <Background src={spring} alt='Spring image' />
      </div>
      <div className='background fall'>
        <Background src={fall} alt='Fall image' />
      </div>
    </div>
  );
}

export default App;
