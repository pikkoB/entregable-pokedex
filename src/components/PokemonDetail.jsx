import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PokemonDetail = () => {


    const navigate = useNavigate()
    const {id} = useParams ();
    const [pokemon, setPokemon] = useState  ({});
    useEffect(()=> {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then( res => setPokemon (res.data))
        .catch(()=> alert("ese pokemon no existe"))
        navigate('/pokedex')
    },[id] )
    

console.log(pokemon)

    return (
        <div>
            <h1>Pokemon Detail</h1>
            <h2>{pokemon.name}</h2>
            <div>
                <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                <p>weight: {pokemon.weight} </p>
                <p>height: {pokemon.height} </p>
            </div>
        </div>
    );
};

export default PokemonDetail;