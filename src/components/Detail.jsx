import React, { useState, useEffect } from 'react'
import './Detail.css'
import { useParams } from "react-router-dom";
import axios from 'axios'

const Detail = () => {
    const {id}= useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

  return (
    <div>
        <h1>Detail</h1>
        <h2>NAME ||{character.name}</h2>
        <h2>STATUS ||{character.status}</h2>
        <h2>SPECIES ||{character.species}</h2>
        <h2>GENDER ||{character.gender}</h2>
        <h2>ORIGIN ||{character.origin?.name}</h2>
        <img src={character.image} alt={character.name} />

    </div>
  );
};

export default Detail;