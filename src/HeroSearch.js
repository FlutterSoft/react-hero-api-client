import React from 'react'

export default function HeroSearch({userInput, handleChangeUserInput, handleSearch}){
    return(
        <form onSubmit={e => e.preventDefault()}>
        <input 
          placeholder="enter hero name"
          value={userInput}
          onChange={handleChangeUserInput}
        />
        <button onClick={handleSearch}>Search</button>
      </form>
    )
}