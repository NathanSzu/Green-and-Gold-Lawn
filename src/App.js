import { useState, useEffect } from 'react';
import summer from './Assets/Grass.jpg';
import winter from './Assets/Snow.jpg';
import spring from './Assets/Spring.jpg';
import fall from './Assets/Fall.jpg';
import Background from './Components/Background';
import Jumbotron from './Components/Jumbotron';
import gsap from "gsap";

function App() {
  const [season, setSeason] = useState('')
  const [seasonText, setSeasonText] = useState('')

  useEffect(() => {
    gsap.set('.season', { xPercent: 100 })

    var currentDate = `${new Date()}`;

    if (currentDate.includes('Dec') || currentDate.includes('Jan') || currentDate.includes('Feb')) {
      setSeason(winter); setSeasonText('winter')
    } else if (currentDate.includes('Mar') || currentDate.includes('Apr') || currentDate.includes('May')) {
      setSeason(spring); setSeasonText('spring')
    } else if (currentDate.includes('Jun') || currentDate.includes('Jul') || currentDate.includes('Aug')) {
      setSeason(summer); setSeasonText('summer')
    } else if (currentDate.includes('Sep') || currentDate.includes('Oct') || currentDate.includes('Nov')) {
      setSeason(fall); setSeasonText('fall')
    }
  }, [])

  const updateSpring = () => { setSeason(spring); setSeasonText('spring') }

  const updateSummer = () => { setSeason(summer); setSeasonText('summer') }

  const updateFall = () => { setSeason(fall); setSeasonText('fall') }

  const updateWinter = () => { setSeason(winter); setSeasonText('winter') }

  // Function to toggle season backgrounds and other elements
  const toggleSeason = (e) => {
    console.log('clicked')
    if (seasonText === e.target.value) {

    } else {
      gsap.set('.season', { xPercent: 100 })
      gsap.timeline()
        .set('.navtab', { yPercent: -105 })
        .from('.navtab', { delay: .5, duration: .25, yPercent: -105 })

      if (e.target.value === 'spring') {
        gsap.to('.spring', { duration: .7, xPercent: 0, ease: "power4.out", onComplete: updateSpring })
      } else if (e.target.value === 'summer') {
        gsap.to('.summer', { duration: .7, xPercent: 0, ease: "power4.out", onComplete: updateSummer })
      } else if (e.target.value === 'fall') {
        gsap.to('.fall', { duration: .7, xPercent: 0, ease: "power4.out", onComplete: updateFall })
      } else if (e.target.value === 'winter') {
        gsap.to('.winter', { duration: .7, xPercent: 0, ease: "power4.out", onComplete: updateWinter })
      }
    }
  }

  return (
    <div>
      <div className='row pr-2 pl-2'>
        <button className='navtab col-3' value='spring' onClick={toggleSeason}>Spring</button>
        <button className='navtab col-3' value='summer' onClick={toggleSeason}>Summer</button>
        <button className='navtab col-3' value='fall' onClick={toggleSeason}>Fall</button>
        <button className='navtab col-3' value='winter' onClick={toggleSeason}>Winter</button>
      </div>

      <div className='vertical-center w-100'>
        <div className='col-md-10 col-lg-8 mr-auto ml-auto'>
          <Jumbotron />
        </div>
      </div>

      {/* Actual background */}
      <div className='background'>
        <Background src={season} alt='Background' />
      </div>

      {/* Animated season switching backgrounds */}
      <div className='season spring'>
        <Background src={spring} alt='Spring' />
      </div>
      <div className='season summer'>
        <Background src={summer} alt='Summer' />
      </div>
      <div className='season fall'>
        <Background src={fall} alt='Fall' />
      </div>
      <div className='season winter'>
        <Background src={winter} alt='Winter' />
      </div>
    </div>
  );
}

export default App;
