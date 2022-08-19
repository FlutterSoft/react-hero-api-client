import React from 'react'

export default function HeroInfoSection({hero}){
    return(
        <div>
            <h4>Name: {hero.name}</h4>
            <h4>Birth Name: {hero.birthName}</h4>
            <h4>Age: {hero.age}</h4>
            <h4>Nationality: {hero.nationality}</h4>
            <h4>Role: {hero.role}</h4>
            <h4>Health: {hero.health}</h4>
        </div>

    )
}