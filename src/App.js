import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
function App() {

  const [hero, setHero] = useState({})
  async function random(){
    try {
        const response = await fetch('https://simple-overwatch-hero-api.herokuapp.com/api/random')
        const data = await response.json()
        console.log(data)
        setHero({
          name: data.name, 
          birthName: data.birthName, 
          age: data.age, 
          nationality: data.nationality, 
          role: data.role, 
          health: data.health,
          img: data.img,
        
        })
    }
    catch(err){
        console.log(err)
    }
    }

  return (
    <div className="App">
      <section 
        className="MainSection" 
        style={{  backgroundImage: `url(${hero.img})`}}
      >
        <h4>Name: {hero.name}</h4>
        <h4>Birth Name: {hero.birthName}</h4>
        <h4>Age: {hero.age}</h4>
        <h4>Nationality: {hero.nationality}</h4>
        <h4>Role: {hero.role}</h4>
        <h4>Health: {hero.health}</h4>
        {/* <img src=></img> */}

        <button onClick={random}>Find Random Hero</button>
      </section>
    </div>
  );
}

export default App;
