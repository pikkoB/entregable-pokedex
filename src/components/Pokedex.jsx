import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCards from './pokemonCards';

const Pokedex = () => {

    const userName = useSelector(state => state.userName);
    const [inputSearch, setInputSearch] = useState("");
    const [types, setTypes] = useState([]);
  
    const navigate= useNavigate();


    const [pokemons, SetPokemons] = useState([]);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(res => SetPokemons(res.data.results))

        axios.get("https://pokeapi.co/api/v2/type/")
        .then(res => setTypes(res.data.results))
    }, []);
    
   
    const search = () => {
navigate(`/pokedex/${inputSearch.toLowerCase()}`)
    }
    const filtertype = e => {
        
        axios.get(e.target.value)
        .then(res => SetPokemons(res.data.pokemon))
    }


    return (
        <div>
            <h1>pokedex</h1>
            <p>Welcome {userName}</p>
            <div>
                <input type="text" placeholder='search pokemon'
                value={inputSearch}
                onChange={e=> setInputSearch(e.target.value)}
                />
                <button onClick={search}>Search</button>
            </div>

            <div>
                <select onChange={filtertype} name="" id="">
                    {types.map(type =>(
                        <option value={type.url} key={type.url}>{type.name}</option>
                    ))}
                </select>
            </div>
            <ul> {
            pokemons.map(pokemon => (
                    <PokemonCards
                    url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                    key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                    />
                ))
            }
            </ul>
        </div>
    );
};

export default Pokedex;