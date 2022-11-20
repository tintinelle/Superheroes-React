import './App.css';
import Card from '../Card/Card.jsx';
import data from '../../data/data.json';

function App() {
  return (
    <div className="App">

      {
      data.map((hero) =>
      <Card 
      name={hero.heroName} 
      universe={hero.universe} 
      alterEgo={hero.alterEgo} 
      occupation={hero.occupation} 
      friends={hero.friends} 
      power={hero.power} 
      url={hero.picture} 
      details={hero.details}>
      </Card>
      )
    }
    </div>
  );
}

export default App;
