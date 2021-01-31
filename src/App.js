import summer from './Assets/Grass.jpg';
import winter from './Assets/Snow.jpg';
import Background from './Components/Background';

function App() {

  return (
    <div>
      <Background src={summer} alt='summer'/>
    </div>
  );
}

export default App;
