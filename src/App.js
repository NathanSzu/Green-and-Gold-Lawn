import { useState, useEffect } from 'react';
import summer from './Assets/Grass.jpg';
import winter from './Assets/Snow.jpg';
import spring from './Assets/Spring.jpg';
import fall from './Assets/Fall.jpg';
import Background from './Components/Background';

function App() {
const [season, setSeason] = useState('')

useEffect(() => {
  var currentDate = `${new Date()}`;
  if (currentDate.includes('Dec') || currentDate.includes('Jan') || currentDate.includes('Feb')) {
    setSeason(winter)
  } else if (currentDate.includes('Mar') || currentDate.includes('Apr') || currentDate.includes('May')) {
    setSeason(spring)
  } else if (currentDate.includes('Jun') || currentDate.includes('Jul') || currentDate.includes('Aug')) {
    setSeason(summer)
  } else if (currentDate.includes('Sep') || currentDate.includes('Oct') || currentDate.includes('Nov')) {
    setSeason(fall)
  }
  
}, [])

  return (
    <div>
      {season === summer? <Background src={summer} alt='Summer image'/> : null}
      {season === winter? <Background src={winter} alt='Winter image'/> : null}
      {season === spring? <Background src={spring} alt='Spring image'/> : null}
      {season === fall? <Background src={fall} alt='Fall image'/> : null}
    </div>
  );
}

export default App;
