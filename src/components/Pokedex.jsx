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
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279')
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

    const [page, setpage] = useState(1)
    // const page = 3
    const perPage = 5
    const lastIndex = page * perPage
    const firstIndex = lastIndex - perPage
    const pokemonPaginated = pokemons.slice(firstIndex,lastIndex)
    const totalPages = Math.ceil(pokemons.length/ perPage)
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);       
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
            <div>
                <button
                onClick={() => setpage(page-1)}
                disabled={page === 1}
                >Prev page</button>
            </div>
            <b>{page}/{totalPages}</b>
            <div>
                <button
                onClick={() => setpage(page+1)}
                disabled={page === totalPages}
            
                >next page</button>
            </div>
            {pages.map(number => <button onClick={ ()=> setpage(number)} >{number} </button> )}

            <ul> {
            pokemonPaginated.map(pokemon => (
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