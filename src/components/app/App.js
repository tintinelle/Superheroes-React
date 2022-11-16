import './../../style/App.css';
import Card from './../Card.jsx';
import heroes from './../../heroes.json';

function App() {
  return (
    <div className="App">
      {
      heroes.map((hero) =>
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
