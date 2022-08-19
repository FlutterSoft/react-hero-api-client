import './App.css';
import { useState } from 'react'
import HeroInfoSection from './HeroInfoSection'
import HeroSearch from './HeroSearch'
function App() {

  const [hero, setHero] = useState({})
  const [userInput, setUserInput] = useState('')
  
  // gets a random hero from the api
  async function random(){
    try {
        const response = await fetch('https://simple-overwatch-hero-api.herokuapp.com/api/random')
        const data = await response.json()
        // set hero state to the data received
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
  // gets chosen hero from the api
    async function handleSearch(){
      try {
        const choice = userInput.toLowerCase()
        const response = await fetch('https://simple-overwatch-hero-api.herokuapp.com/api/characters/'+choice)
        const data = await response.json()
        // set hero state to the data received
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

    function handleChangeUserInput(e){
      setUserInput(e.target.value)
    }

  return (
    <div className="App">
      <section 
        className="MainSection" 
        style={{  backgroundImage: `url(${hero.img})`}}
      >
        <h1>Overwatch Hero Info</h1>
        <HeroInfoSection hero={hero} />
        <button onClick={random}>Find Random Hero</button>
        <HeroSearch handleChangeUserInput={handleChangeUserInput} handleSearch={handleSearch} userInput={userInput} />
      </section>
    </div>
  );
}

export default App;
