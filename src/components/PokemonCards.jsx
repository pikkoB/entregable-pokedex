import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCards = ({url}) => {

    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get(url)
        .then(res => setPokemon(res.data))
    },[])
   

    return (
        <div>
             <li>
            <div className='card' onClick={()=> navigate(`/pokedex/${pokemon.id}`) }>
            <b>{pokemon.name} </b>
            <img src={pokemon.sprites?.front_default} alt="" />
            
            </div>
        </li>

        </div>
    );
};

export default PokemonCards;