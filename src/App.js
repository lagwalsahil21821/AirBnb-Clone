import './App.css';
import NavBar from './components/home';
import Hero from './components/hero';
import Card from './components/card';
import data from './data'

function App() {
  const cards = data.map((item) =>{
      return(
        <Card 
          item = {item}
        />
      )
  })

  return (
    <div>
      <NavBar />
      <Hero />
      <section className = "card-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
