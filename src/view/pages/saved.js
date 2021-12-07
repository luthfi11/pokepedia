import React, { useState, useEffect } from 'react'
import PokemonList from '../components/pokemon-list'
import Navbar from '../components/navbar'
import { useIndexedDB } from 'react-indexed-db'

const SavedPokemon = () => {
  const { getAll } = useIndexedDB('pokemon')
  const [pokemons, setPokemons] = useState();
 
  useEffect(() => {
    getAll().then(data => {
      setPokemons(data)
    })
  }, [])

  return (
    <div className="container">
      <Navbar title={'My Pokemon'} showBackButton />
      <p className="page-title">{'Saved Pokemon'}</p>
      <PokemonList pokemons={pokemons || []} isSaved />
    </div>
  )
}

export default SavedPokemon
