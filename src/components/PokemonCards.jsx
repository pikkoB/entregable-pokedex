import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PokemonCards = ({ url }) => {

    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        axios
        .get(url)
        .then(res => setPokemon(res.data))
        .catch((err)=> console.log(err))
    }, [])



    const handleClick = () =>{
        navigate(`/pokedex/${pokemon.id}`)
    }

    return (
        <div>
    
    <Card onClick={handleClick} style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {pokemon.sprites?.front_default}/>
      <Card.Body>
        <Card.Title>{pokemon?.name}</Card.Title>
        <Card.Text>
        Height: {pokemon.height} --
        weight: {pokemon.weight} --

        </Card.Text>
        
      </Card.Body>
    </Card>

                    {/* <b>{pokemon?.name} </b>
                    <img src={pokemon.sprites?.front_default} alt="" /> */}

                
            

        </div>
    );
};

export default PokemonCards;