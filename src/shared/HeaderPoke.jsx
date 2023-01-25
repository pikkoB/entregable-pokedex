import React from 'react'
import './styles/headerStyles.css'
import pokedexhead from '../assets/img/pokedexhead.png'

const HeaderPoke = () => {
    return (
        <header className='header'>
            <img src={pokedexhead} alt="" />
           
        </header>

    )
}

export default HeaderPoke