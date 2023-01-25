import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate, useParams } from 'react-router-dom';

const PokemonDetail = () => {


    const navigate = useNavigate()
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
            .catch(() => alert("ese pokemon no existe"))

    }, [id])


    console.log(pokemon)

    return (
        <div className='detail-container'>
            <h1 style={{ width: '18rem', backgroundColor: "red", margin: "2rem", borderRadius: "20px", padding: "2rem" }}>Pokemon Detail</h1>
            <h2 style={{ width: '18rem' }}>{pokemon?.name}</h2>
            <div>
                <img style={{ backgroundColor: "green", padding: "2rem", borderRadius: "100%", objectFit: "contain", }} src={pokemon.sprites?.other.dream_world.front_default} alt="" />

                <div className='details-container'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Header>Type</Card.Header>
                        <ListGroup variant="flush">
                            {pokemon.types?.map(type => (
                                <ListGroup.Item key={type.type.name}>{type.type.name}</ListGroup.Item>
                            ))}

                        </ListGroup>
                    </Card><br />


                    <Card style={{ width: '18rem' }}>
                        <Card.Header>Habilitis</Card.Header>
                        <ListGroup variant="flush">
                            {pokemon.abilities?.map(ability => (
                                <ListGroup.Item key={ability.ability.name}>{ability.ability.name}</ListGroup.Item>
                            ))}


                        </ListGroup>
                    </Card><br />




                    <Card style={{ width: '18rem' }}>
                        <Card.Header>Stats</Card.Header>
                        <ListGroup variant="flush">
                            {pokemon.stats?.map((stat, key) => (

                                <ListGroup.Item key={key}><p>{stat.stat.name.toString()}:</p><p>{stat.base_stat}/150</p></ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card>

                </div>


            </div>
        </div >
    );
};

export default PokemonDetail;