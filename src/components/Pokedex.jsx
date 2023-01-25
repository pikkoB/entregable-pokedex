import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCards from './PokemonCards';

const Pokedex = () => {

    const userName = useSelector(state => state.userName);
    const [inputSearch, setInputSearch] = useState("");
    const [types, setTypes] = useState([]);

    const navigate = useNavigate();


    const [pokemons, SetPokemons] = useState([]);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279')
            .then(res => SetPokemons(res.data.results))

        axios.get("https://pokeapi.co/api/v2/type/")
            .then(res => setTypes(res.data.results))
    }, []);


    const search = () => {
        const input = inputSearch.trim().toLowerCase()
        console.log(inputSearch)
        navigate(`/pokedex/${input}`)
    }
    const filtertype = e => {
        console.log(e.target.value)
        axios.get(e.target.value)
            .then(res => SetPokemons(res.data.pokemon))
    }

    const [page, setpage] = useState(1)

    const perPage = 20
    const lastIndex = page * perPage
    const firstIndex = lastIndex - perPage
    const pokemonPaginated = pokemons.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(pokemons.length / perPage)
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    console.log(pokemonPaginated)

    return (

        <div className='pokedex-container'>

            <div className='search-select-cpntainer'>

                <h3>Welcome <span> {userName}</span>, here you can find your favorite pokemon  </h3>
                <div className='searchContainer'>
                    <div >
                        <input className='searchInput' type="text" placeholder='search pokemon'
                            value={inputSearch}
                            onChange={e => setInputSearch(e.target.value)}
                        />
                        <button className='searchButon' onClick={search}>Search</button>
                    </div>

                    <div>
                        <select onChange={filtertype} name="" id="">
                            {types.map(type => (
                                <option value={type.url} key={type.url}>{type.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

            </div>
            <div className='btn-pag'>
                <div>
                    <button
                        onClick={() => setpage(page - 1)}
                        disabled={page === 1}
                    >Prev page</button>
                </div>
                <b>{page}/{totalPages}</b>
                <div>
                    <button
                        onClick={() => setpage(page + 1)}
                        disabled={page === totalPages}

                    >next page</button>
                </div>
            </div>
            {pages.map(number => <button key={number} onClick={() => setpage(number)} >{number} </button>)}


            <div className='card-container'>
                {
                    pokemonPaginated.map(pokemon => (
                        <PokemonCards
                            url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                            key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Pokedex;